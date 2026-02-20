fetch("/api/destinos")
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("destinos");
    contenedor.innerHTML = "";

    data.forEach((destino, index) => {
      contenedor.innerHTML += `
        <div class="column is-4" data-aos="fade-up" data-aos-delay="${index * 150}">
          <div class="card">
            <div class="card-content">
              <p class="title">${destino.nombre}</p>
              <p>${destino.descripcion}</p>
              <p class="precio">S/ ${destino.precio}</p>

              <button class="button is-primary boton-reservar"
                onclick="abrirModal(${destino.id})">
                Reservar ahora
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });

let destinoSeleccionado = null;

function abrirModal(id) {
  destinoSeleccionado = id;
  document.getElementById("modalReserva").classList.add("is-active");
}

function cerrarModal() {
  document.getElementById("modalReserva").classList.remove("is-active");
}

function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");

  mensaje.className = `notification ${tipo}`;
  mensaje.innerHTML = texto;
  mensaje.classList.remove("is-hidden");

  setTimeout(() => {
    mensaje.classList.add("is-hidden");
  }, 3500);
}



async function enviarReserva() {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;
  const mensajeCliente = document.getElementById("mensajeCliente").value;

  if (!nombre || !telefono || !email || !fecha) {
    mostrarMensaje("⚠️ Completa los campos obligatorios", "is-warning");
    return;
  }

  try {
    const res = await fetch("/api/reservas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        telefono,
        email,
        fecha,
        personas,
        mensaje: mensajeCliente,
        destino_id: destinoSeleccionado
      })
    });

    if (res.ok) {
      mostrarMensaje("✅ Reserva enviada. Pronto te contactaremos", "is-success");
      cerrarModal();
    } else {
      mostrarMensaje("❌ No se pudo registrar la reserva", "is-danger");
    }

  } catch {
    mostrarMensaje("❌ Error del servidor", "is-danger");
  }
}