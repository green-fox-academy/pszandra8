'use strict';

var a = 24;
var out = 0;
if (a % 2 == 0) {
    out += 1;
}

console.log(out);

var b = 13;
var out2 = '';
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"
if (b > 10 && b < 20) {
    out2 = 'Sweet';
}
else if (b < 20) {
    out2 = 'Less';
}
else if (b > 20) {
    out2 = 'More';
}

console.log(out2);

let c = 123;
let credits = 100;
let isBonus = false;
// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
if (credits >= 50 && isBonus == false) {
    c -= 2;
}
else if (credits < 50 && isBonus == false) {
    c -=1;
}
else if (isBonus) {
    c = 123;
}

console.log(c);

var d = 8;
var time = 120;
var out3 = '';

if (d % 4 == 0 && time <= 200) {
    out3 = 'check';
}
else if (time > 200) {
    out3 = 'Time out';
}
else {
    out3 = 'Run Forest Run!'
}

console.log(out3);