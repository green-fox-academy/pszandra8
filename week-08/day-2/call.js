'use strict';

function factorialTillLimitWithCallback(limit, callback) {
  var factorial = 1;
  for (var i = 1; i <= limit; ++i) {
    callback(factorial);
    factorial *= i;
  }
}

const number = function (factorial) {
  console.log(factorial);
}

console.log(factorialTillLimitWithCallback(20, number));