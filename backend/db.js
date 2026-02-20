const mysql = require("mysql2");

const conexion = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

conexion.connect(err => {
  if (err) {
    console.error("❌ Error MySQL:", err);
  } else {
    console.log("✅ MySQL conectado correctamente");
  }
});

module.exports = conexion;