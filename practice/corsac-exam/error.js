'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/public/index.html');
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'spaceship',
});

conn.connect((err) => {
  if (err) {throw err;
  } else {
    console.log('Connected to mySQL!');
  }
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/planets', function (req, res) {
  conn.query(`SELECT name, population FROM planet`, function (err, planetRows) {
    if (err) {
      throw err;
    } else {
      res.json(planetRows)
    }
  })
})

app.listen(8080, () => {
  console.log('the app is running');
});


//index.html:1 Failed to load http://localhost:8080/:
//No 'Access-Control-Allow-Origin' header is present on the requested resource.
//Origin 'null' is therefore not allowed access.