'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/assets', express.static('./assets'));

app.use(bodyParser.json());

app.post('/dountil/:arrays', function (req, res) {
  const action = req.body.arrays;
  console.log(action);
  if (number === undefined) {
    res.json({
      error: 'Please provide a number!'
    }
    )
  } else if (action === undefined) {
    res.json(
      {
        error: 'Please provide what to do with the numbers!'
      }
    );
  } 
  else {
    if (action === 'sum') {
      res.json(
        {
          until: number,
          result: sum(numbers)
        }
      );
      } else if (action === 'multiply') {
        res.json(
          {
            until: number,
            result: multiply(numbers)
          }
        );
      } else if (action === 'double') {
        res.json({
          unit: number,
          result: double(numbers)
        })
      }
  }
});

let sum = function (numbers) {
  result = 0;
    for (i in unmbers) {
      result += numbers[i];
}
}

let multiply = function (numbers) {
  result = 1;
  for (i in numbers) {
    result = result * numbers[i];
  }
}

let double = numbers.forEach(element => {
  element * 2;
});

app.listen(8080, function () {
  console.log('app is running');
});