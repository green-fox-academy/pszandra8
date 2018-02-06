'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname, '/public/bookstore.html');
});

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
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

app.get('/books', function (req, res) {
  let baseQuery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price
    FROM book_mast INNER JOIN author ON author.aut_id=book_mast.aut_id
    INNER JOIN category ON book_mast.cate_id=category.cate_id
    INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id`;
  if (req.query.category) {
      baseQuery += ` WHERE cate_descrip LIKE '${req.query.category}%'`;
    if (req.query.publisher) {
      baseQuery += ` AND pub_name LIKE '${req.query.publisher}%'`;
    }
    if (req.query.priceHi) {
      baseQuery += ` AND book_price <= '${req.query.priceHi}%'`;
    }
    if (req.query.priceLo) {
      baseQuery += ` AND book_price >= '${req.query.priceLo}%'`;
    }
  }
  conn.query(baseQuery, function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
})

app.listen(8080, () => {
  console.log('the app is running');
});