'use strict';

let ai = [3, 4, 5, 6, 7];
let sum = 0;

for (let i in ai) {
    sum += ai[i];
}

console.log(sum);