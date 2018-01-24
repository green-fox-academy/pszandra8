'use strict';

var test = require('tape');
var summing = require('./Sum.js');

test('summing', function (t) {
  var actual = summing([1, 2]);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});