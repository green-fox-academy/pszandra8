'use strict';

let listSum = function(list) {
    let total = 0;
    list.forEach(function (element) {
      if (typeof element !== 'number') {
        throw new Error('not a number');
      }
      else {
        total += element;
      }
    });
    return total;
  }

module.exports = listSum;