
'use strict';

let a = 3;
a =+ 10;

console.log(a);

let b = 100;
b -= 7;

console.log(b);

var c = 44;
c *= 2;

console.log(c);

let d = 125;
d /= 5;

console.log(d);

let e = 8;
e = e ** 3;

console.log(e);

let f1 = 123;
let f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
if (f1 > f2) {
    console.log(true);
}
else {
    console.log(false);
}

let g1 = 350;
let g2 = 200;
if (g2 * 2 > g1) {
    console.log(true);
}
else {
    console.log(false);
}

let h = 1357988018575474;
if (h % 11 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

let i1 = 10;
let i2 = 3;
if (i1 > i2 ** 2 && i1 > i2 ** 3) {
    console.log(true);
}
else {
    console.log(false);
}

let j = 1521;
if (j % 3 || j % 5) {
    console.log(true);
}
else {
    console.log(false);
}

let k = 'Apple';
k = 'Apple'.repeat(4);

console.log(k);