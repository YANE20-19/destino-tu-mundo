const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Backend Destino Tu Mundo activo");
});

app.use("/api/destinos", require("./routes/destinos"));
app.use("/api/reservas", require("./routes/reservas"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Servidor activo en puerto", PORT);
});