'use strict';

var test = require('tape');
var isAnagram = require('./Anagram.js');

test('not equal strings', function (t) {
  var actual = isAnagram('lorem', 'ipsum');
  var expected = false;

  t.equal(actual, expected);
  t.end();
});

test('equal strings', function (t) {
  var actual = isAnagram('god', 'dog');
  var expected = true;

  t.equal(actual, expected);
  t.end();
});