'use strict';

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/', express.static('./public'));

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

app.get('/', cors(), function (req, res) {
  res.sendFile(__dirname, '/public/index.html');
});

app.get('/planets', cors(), function (req, res) {
  conn.query(`SELECT * FROM spaceship, planet`, function (err, rows) {
    if (err) {
      throw err;
    } else {
      res.json(rows)
    }
  })
})

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/movehere/:planet_id', cors(), function (req, res) {
  conn.query(`UPDATE spaceship SET planet = (SELECT name FROM planet WHERE id=${req.params.planet_id});`, function (err, rows) {
    res.json(rows)
  })
})

app.post('/toplanet/:planet_id', cors(), function (req, res) {
  conn.query(`SELECT utilization FROM spaceship`, function (err, spaceshipRows) {
      conn.query(`SELECT population FROM planet WHERE id=${req.params.planet_id}`, function (err, planetRows) {
          if (spaceshipRows[0].utilization > 0) {
            conn.query(`UPDATE spaceship SET utilization = 0;`, function (err, rows) {
            let newPopulation = spaceshipRows[0].utilization + planetRows[0].population;
            conn.query(`UPDATE planet SET population = ${newPopulation} WHERE id=${req.params.planet_id};`, function (err, rows) {
              if (err) {
                throw err;
              } else {
                res.json({
                  result: "success"
                })
              }
            })
          })
        }
      })
    })
  })

app.post('/toship/:planet_id', cors(), function (req, res) {
  conn.query(`SELECT utilization FROM spaceship`, function (err, spaceshipRows) {
    conn.query(`SELECT population FROM planet WHERE id=${req.params.planet_id}`, function (err, planetRows) {
      if (spaceshipRows[0].utilization < 60) {
        if (planetRows[0].population > 0) {
          let freeSpacesOnShip = 60 - spaceshipRows[0].utilization;
          let passangerCount;
          if (planetRows[0].population - freeSpacesOnShip < 0) {
            passangerCount = planetRows[0].population
          } else {
            passangerCount = freeSpacesOnShip;
          }
          let newPopulation = planetRows[0].population - passangerCount;
          conn.query(`UPDATE spaceship SET utilization = ${passangerCount};`, function (err, rows) {
            conn.query(`UPDATE planet SET population = ${newPopulation} WHERE id=${req.params.planet_id};`, function (err, rows) {
              if (err) {
                throw err;
              } else {
                res.json({
                  result: "success"
                })
              }
            })
          })
        }
      }
    })
  })
})

app.listen(8080, () => {
  console.log('the app is running');
});