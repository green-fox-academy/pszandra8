'use strict';

let lineCount = 6;

console.log('%'.repeat(lineCount));

for (let i = 1; i <= lineCount; i++) {
    console.log('%' + ' '.repeat(i) + '%' + ' '.repeat(lineCount - 3 - i) + '%');
}

console.log('%'.repeat(lineCount));