'use strict';

let aj = [3, 4, 5, 6, 7];
let tempAj = [];

for (let i = aj.length; i >= 0; i--) {
    tempAj.push(aj[i]);
}
console.log(tempAj);

aj.reverse();
console.log(aj);