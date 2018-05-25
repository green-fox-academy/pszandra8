'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/day-04', express.static('./day-04'));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/reddit.html');
});

app.listen(8080, function () {
  console.log('app is running');
});