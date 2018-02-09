'use strict';

//variable
const port = 8080;

//Packages
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

//App
const app = express();
app.use(bodyParser.json());

//imports all files in public folder, first looks for the html one
app.use('/', express.static('./public'));

//SQL database
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todo',
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//connection
conn.connect((err) => {
  if (err) {throw err;
  } else {
    console.log('Connected to mySQL!');
  }
});

app.get('/todos', function (req, res) {
  conn.query('SELECT * FROM todos', function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json(rows);
    }
  })
})

//Run App
app.listen(port, () => {
  console.log(`the app is running on ${port}`);
});