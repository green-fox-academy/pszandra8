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

app.get('/greeter', function (req, res) {
  const name = req.query.name;
  const title = req.query.title;
  if (name === undefined) {
    res.json(
      {
        error: 'Please provide a name!'
      }
    );
  } else if (title === undefined) {
    res.json(
      {
        error: 'Please provide a title!'
      }
    );
  }
  else {
    res.json(
      {
        welcome_message: `Oh, hi there ${name}, my dear ${title}!`
      }
    );
  }
});

app.get('/appenda/:appendable', function (req, res) {
  const appendable = req.params.appendable;
  if (appendable !== undefined) {
  res.json(
    {
      appended: `${appendable}a`
    }
  );
}
  else {
    {
      res.status(404);
    }
  }
});

app.post('/dountil/:action', function (req, res) {
  const action = req.params.action;
  const number = req.body.until;
  if (number === undefined) {
    res.json({
      error: 'Please provide a number!'
    }
    )
  } else {
    if (action === 'sum') {
      res.json(
        {
          until: number,
          result: sum(number)
        }
      );
      } else if (action === 'factor') {
        res.json(
          {
            until: number,
            result: factorio(number)
          }
        );
      }
  }
});

let sum = function (number) {
  if (number > 0) {
      return number + sum(number - 1);
  } else if (number === 0) {
      return 0;
  } else {
      return 1;
  }
}

let factorio = function (number) {
  if (number === 0) {
      return 1;
  } else {
      return number * factorio(number - 1);
  }
}

app.listen(8080, function () {
  console.log('app is running');
});