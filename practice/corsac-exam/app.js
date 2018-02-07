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
  next()
});

app.get('/planets', function (req, res) {
  conn.query(`SELECT * FROM spaceship, planet`, function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
})

app.post('/movehere/:planet_id', function (req, res) {
  conn.query(`UPDATE spaceship SET planet = (SELECT name FROM planet WHERE id=${req.params.planet_id});`, function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json({
        result: "success"
      })
    }
  })
})

app.post('/toplanet/:planet_id', function (req, res) {
  conn.query(`SELECT utilization FROM spaceship`, function (err, spaceshipRows) {
    if (err) {
      throw err;
    } else {
      res.json({
        result: "success"
      })
    }
  })

  conn.query(`SELECT population FROM planet WHERE id=${req.params.planet_id}`, function (err, planetRows) {
    if (err) {
      throw err;
    } else {
      res.json({
        result: "success"
      })
    }
  })

  if (spaceshipRows[0].utilization > 0) {
    conn.query(`UPDATE spaceship SET utilization = 0;`, function (err, rows) {
      if (err) {
        throw err;
      } else {
        res.json({
          result: "success"
        })
      }
    })
    conn.query(`UPDATE planet SET population = ${spaceshipRows[0].utilization} + ${planetRows[0].population};`, function (err, rows) {
      if (err) {
        throw err;
      } else {
        res.json({
          result: "success"
        })
      }
    })
  }
})

app.post('/toship/:planet_id', function (req, res) {
  conn.query(`SELECT utilization FROM spaceship`, function (err, spaceshipRows) {
    if (err) {
      throw err;
    } else {
      res.json({
        result: "success"
      })
    }
  })

  conn.query(`SELECT population FROM planet WHERE id=${req.params.planet_id}`, function (err, planetRows) {
    if (err) {
      throw err;
    } else {
      res.json({
        result: "success"
      })
    }
  })

  if (spaceshipRows[0].utilization !== 0) {
    let freeSpacesOnShip = 60 - spaceshipRows[0].utilization;
    conn.query(`UPDATE spaceship SET utilization = 60;`, function (err, rows) {
      if (err) {
        throw err;
      } else {
        res.json({
          result: "success"
        })
      }
    })
    conn.query(`UPDATE planet SET population = ${planetRows[0].population} - ${freeSpacesOnShip};`, function (err, rows) {
      if (err) {
        throw err;
      } else {
        res.json({
          result: "success"
        })
      }
    })
  }
})

app.listen(8080, () => {
  console.log('the app is running');
});