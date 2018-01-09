'use strict';

let matrix = [[]];
let size = 4;

for (let i = 0; i <= matrix.length; i++) {
  for (let j = 0; j <= matrix.lenth; j ++) {
    if (i + j === size - 1) {
      matrix[i][j] = 1;
    }
    else {
      matrix[i][j] = 0;
    }
  }
}

console.log(matrix);