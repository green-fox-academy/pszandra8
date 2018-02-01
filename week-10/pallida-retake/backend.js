'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/store.html');
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'store'
});

conn.connect((err) => {
  if (err) {throw err;
  } else {console.log('Connected to mySQL!');}
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/warehouse', function (req, res) {
    conn.query(`SELECT * FROM warehouse`, function (err, rows) {
      res.json(rows);
  })
})

app.listen(8080, () => {
  console.log('the app is running');
});