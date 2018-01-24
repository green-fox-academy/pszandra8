'use strict';

var test = require('tape');
var letterCounter = require('./count_letters.js');

test('correct string and count', function (t) {
  var actual = letterCounter('cica');
  var expected = { c: 2, i: 1, a: 1 };

  t.deepEqual(actual, expected);
  t.end();
});