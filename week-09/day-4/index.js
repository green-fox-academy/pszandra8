'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/assets', express.static('./assets'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/doubling', function (req, res) {
  if (req.query.input === undefined) {
    res.json(
      {
        error: 'Please provide an input!'
      }
    );
  } else {
    res.json(
      {
        received: req.query.input,
        result: req.query.input * 2
      }
    );
  }
});

app.listen(8080, function () {
  console.log('app is running');
});