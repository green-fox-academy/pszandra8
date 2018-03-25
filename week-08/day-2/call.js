'use strict';

function factorialTillLimitWithCallback(limit, callback) {
  var factorial = 1;
  for (var i = 1; i <= limit; ++i) {
    callback(factorial);
    factorial *= i;
  }
}

const printing = function (factorial) {
  console.log(factorial);
}

factorialTillLimitWithCallback(20, printing);
