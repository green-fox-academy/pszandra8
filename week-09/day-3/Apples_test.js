'use strict';

var test = require('tape');
var get = require('./Apples.js');

test('getApple', function (t) {
  var actual = get();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});