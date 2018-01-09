'use strict';

let line = 8;

if (line % 2 === 0) {
    let lineCount = line / 2;
for (let i = 1; i < lineCount + 1; i++) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i) + '*'.repeat(i-1));
  }

  for (let i = lineCount; i > 0; i--) {
    console.log(' '.repeat(lineCount - i) + '*'.repeat(i) + '*'.repeat(i-1));
  }
}