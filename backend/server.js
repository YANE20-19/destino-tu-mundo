const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 API ROUTES
app.use("/api/destinos", require("./routes/destinos"));
app.use("/api/reservas", require("./routes/reservas"));

// 👉 PUERTO PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("🚀 Servidor activo en puerto", PORT);
});