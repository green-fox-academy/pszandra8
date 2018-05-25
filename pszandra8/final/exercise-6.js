'use strict';

let matrix = [[]];

function matrixMaker(number) {
  for (let i = 0; i < number; i++) {
    let temporary = '';
    matrix[i] = [0];
    for (let j = 0; j < number; j++) {
      temporary += i + j === number - 1 ? matrix[i][j] = [1] + ' ' : matrix[i][j] = [0] + ' ';
    }
    console.log(temporary);
  }
}

matrixMaker(5);