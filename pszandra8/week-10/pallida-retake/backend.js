'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/public/store.html');
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'store',
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

app.get('/warehouse', function (req, res) {
  conn.query(`SELECT * FROM warehouse`, function (err, rows) {
    res.json(rows);
  })})

app.get('/warehouse/price-check', function(req, res) {
  conn.query(`SELECT in_store FROM warehouse WHERE item_name='${req.query.item}'
  AND size='${req.query.size}';`, function (err, availableRows) {
    const available = availableRows[0].in_store;
    if (available < req.query.quantity) {
      res.json({
        result: 'error, we don\'t have enough items in store'
      })
    } else if (req.query.quantity < 3) {
      res.json({
        result: 'please order at least 3, one for yourself, two for your friends'
      })
    } else if (req.query.quantity >= 3 && available >= req.query.quantity) {
      conn.query(`SELECT unit_price FROM warehouse
      WHERE item_name='${req.query.item}'
      AND size='${req.query.size}';`, function (err, unitPriceRows) {
        const priceOfOne = unitPriceRows[0].unit_price;
        res.json({
          result: 'OK',
          total_price: priceOfOne * req.query.quantity,
        })
      })
    }
    }
  )
})

app.listen(8080, () => {
  console.log('the app is running');
});