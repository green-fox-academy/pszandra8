'use strict';

var test = require('tape');
var summing = require('./Sum.js');

test('summing', function (t) {
  var actual = summing([1, 2]);
  var expected = 3;

  t.equal(actual, expected);
  t.end();
});

test('summing more', function (t) {
  var actual = summing([1, 2, 1, 1]);
  var expected = 5;

  t.equal(actual, expected);
  t.end();
});

test('not a number', function (t) {

  t.throws(summing.bind((this, ['string']), Error));
  t.end();
});