const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 SERVIR FRONTEND
app.use(express.static(path.join(__dirname, "../frontend")));

// 👉 API
app.use("/api/destinos", require("./routes/destinos"));
app.use("/api/reservas", require("./routes/reservas"));

// 👉 RUTA PRINCIPAL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, () => {
  console.log("🚀 Servidor activo en http://localhost:3000");
});