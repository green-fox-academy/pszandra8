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

//imports all files from public folder, first looks for the html one
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


//backend endpoints
app.get('/todos', function (req, res) {
  conn.query('SELECT * FROM todos', function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json(rows);
    }
  })
})

app.post('/posting', function (req, res) {
  conn.query(`INSERT INTO todos SET ?`, [req.body], function (err, packet) {
    if (err) {
      throw err;
    } else {
      console.log('Successful insert')
    }
  })
})

app.delete('/delete/:id', function (req, res) {
  conn.query(`DELETE FROM todos WHERE id=?;`, [req.params.id], function (err, packet) {
    if (err) {
      throw err;
    } else {
      res.sendStatus(200);
    }
  }) 
})

app.post('/change/:id', function (req, res) {
  const id = req.params.id;
  conn.query(`SELECT status FROM todos WHERE id=?;`, [id], function (err, rows) {
    if (rows[0].status === 'done') {
      let queryString = `UPDATE todos SET status='not done' WHERE id=${id};`;
      conn.query(queryString, function (err, packet) {
        if (err) {
          throw err;
        } else {
          res.sendStatus(200);
        }
      })
    } else {
      conn.query(`UPDATE todos SET status='done' WHERE id=${id};`, function (err, packet) {
        if (err) {
          throw err;
        } else {
          res.sendStatus(200);
        }
      })
    }
  }) 
})

//Run App
app.listen(port, () => {
  console.log(`the app is running on ${port}`);
});