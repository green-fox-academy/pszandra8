'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(number) {
    if (number === 0) {
        return 1;
    } else {
        return number * factorio(number - 1);
    }
}

console.log(factorio(0));
console.log(factorio(5));