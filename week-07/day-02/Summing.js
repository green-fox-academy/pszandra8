'use strict';

function sum(number) {
    if (number > 0) {
        return number + sum(number - 1);
    } else if (number === 0) {
        return 0;
    } else {
        return 'Not a positive number'
    }
}

console.log(sum(-2));
console.log(sum(0));
console.log(sum(43));