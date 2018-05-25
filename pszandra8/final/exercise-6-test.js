'use strict';

var test = require('tape');
var matrixMaker = require('./exercise-6.js');

test('matrix size 1', function (t) {
  var actual = matrixMaker(1);
  var expected = 1 + ' ';

  t.equal(actual, expected);
  t.end();
});

test('matrix size 1', function (t) {
  var actual = matrixMaker(2);
  var expected = 1 + ' ' + 0 + ' ';

  t.equal(actual, expected);
  t.end();
});
