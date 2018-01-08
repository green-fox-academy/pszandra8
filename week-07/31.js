'use strict';

var lineCount = 6;

console.log('%'.repeat(lineCount - 1));

for (let i = 2; i < lineCount; i++) {
    console.log('%' + ' '.repeat(lineCount - 3) + '%');
}

console.log('%'.repeat(lineCount - 1));