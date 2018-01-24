'use strict';

function arraySum(array){
  let total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

module.exports = arraySum;