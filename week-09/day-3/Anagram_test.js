'use strict';

var test = require('tape');
var isAnagram = require('./Anagram.js');

test('anagram', function (t) {
  var actual = isAnagram(['lorem'], ['ipsum']);
  var expected = false;

  t.equal(actual, expected);
  t.end();
});