'use strict';

let p1 = [1, 2, 3];
let p2 = [4, 5];

if (p2.length > p1.length) {
    console.log(true);
}
else if (p2.length === p1.length) {
    console.log('equal');
} 
else {
    console.log(false);
}