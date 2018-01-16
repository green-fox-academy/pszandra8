'use strict';

let numIndex = 0;

function selectLastEvenNumber(numbers, action) {
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[numIndex] < numbers[i]) {
      numIndex = i;
    }
  }
  return printNumber(numbers[numIndex]);
}

function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8