const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "destino_tu_mundo",
  port: 3306
});

conexion.connect(err => {
  if (err) {
    console.error("❌ Error MySQL:", err);
  } else {
    console.log("✅ MySQL conectado");
  }
});

module.exports = conexion;
