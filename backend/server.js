const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// FRONTEND
app.use(express.static(path.join(__dirname, "../frontend")));

// API
app.use("/api/destinos", require("./routes/destinos"));
app.use("/api/reservas", require("./routes/reservas"));

// INDEX
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("🚀 Servidor activo en puerto", PORT);
});