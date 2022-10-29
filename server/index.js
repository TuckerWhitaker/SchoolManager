const express = require("express");
const app = express();
const port = 3001;
const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "schoolmanager",
  port: 3306,
});
//db.query

/*

DB: school manager

Tables: Assignments, Students;




*/

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(port, function () {
  console.log(`server listening on port ${port}`);
});

//GetTable
//SetTable
//UpdateTable
//DeleteTable

app.post("/GetTable", (req, res) => {});

app.post("/SetTable", (req, res) => {});
