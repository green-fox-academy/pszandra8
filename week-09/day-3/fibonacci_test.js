'use strict';

var test = require('tape');
var fibonacci = require('./fibonacci.js');

test('working fib', function (t) {
  var actual = fibonacci(10);
  var expected = 55;

  t.equal(actual, expected);
  t.end();
});

test('working fib', function (t) {
  var actual = fibonacci(1);
  var expected = 1;

  t.equal(actual, expected);
  t.end();
});

test('working fib', function (t) {
  var actual = fibonacci(0);
  var expected = 0;

  t.equal(actual, expected);
  t.end();
});