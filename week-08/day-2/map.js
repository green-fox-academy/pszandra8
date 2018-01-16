'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

const eCal = fruits.map(function (fruit) {
  let counter = 0;
  for (let i = 0; i <= fruit.length; i++) {
    if (fruit[i] === 'e') {
      counter++;
    }
  }
  return counter;
});

console.log(eCal);