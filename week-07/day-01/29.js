'use strict';

var lineCount = 4;

for (let i = 1; i <= lineCount; i++) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i) + '*'.repeat(i -1));
}