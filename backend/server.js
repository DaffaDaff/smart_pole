const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();

var port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "smart_pole",
});

// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "fijaytra_tetra",
//   password: "Tetraflex123",
//   database: "fijaytra_tetra",
// });

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

app.get("/api/get_entries", (req, res) => {
  const query = 'SELECT id, nama_pole, alamat, serial_number, public_adresser, air_quality, signage, cctv_one, cctv_two, led_one, led_two, fan, kue_card_reader, tanggal_build, tanggal_connect, tanggal_integrasi, latitude, longitude FROM tmst_smart_pole';
  
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(result);
  });
});

app.get("/api/get_entry/:id", (req, res) => {
  const id = req.params.id;
  const query = 'SELECT id, nama_pole, alamat, serial_number, public_adresser, air_quality, signage, cctv_one, cctv_two, led_one, led_two, fan, kue_card_reader, tanggal_build, tanggal_connect, tanggal_integrasi, latitude, longitude FROM tmst_smart_pole WHERE id = ?;';
  
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(result);
  });
});

app.delete("/api/delete/:id", (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM tmst_smart_pole WHERE id = ?;';
    
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Database delete failed" });
        return;
      }
      res.json({ success: true, id: result.insertId });
    });
  });

const path = require("path");

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '../frontend/build')));

// // Fallback for all other routes (SPA support)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
// });

app.listen(port);console.log('Listening on localhost:'+ port);