const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { nombre, telefono, destino_id } = req.body;

  const sql = `
    INSERT INTO reservas (nombre, telefono, destino_id)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, telefono, destino_id], err => {
    if (err) return res.status(500).json(err);
    res.json({ mensaje: "OK" });
  });
});

module.exports = router;
