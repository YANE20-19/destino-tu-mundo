const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM destinos", (error, resultados) => {
    if (error) return res.status(500).json(error);
    res.json(resultados);
  });
});

module.exports = router;
