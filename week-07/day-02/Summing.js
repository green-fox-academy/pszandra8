'use strict';

function sumDigits(number) {
    let str = number.toString();
    let sum = 0;
  
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str.charAt(i), 10);
    }
      
    return sum;
  }
}

console.log(sumDigits(123));