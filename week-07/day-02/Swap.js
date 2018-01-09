'use strict';

let abc = ["Arthur", "Boe", "Chloe"];
let one = abc[0];
let three = abc[2];
abc[2] = one;
abc[0] = three;

console.log(abc);