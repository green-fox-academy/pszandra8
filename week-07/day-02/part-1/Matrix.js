'use strict';

let matrix = [];
let size = 4;
for(var i = 0; i < size; i++) {
  let empty_list = []
  for (let j = 0; j < size; j++) {
    if (i + j == size - 1){
      empty_list[j] = 1;
    }
    else {
      empty_list[j] = 0;
    }
  }
  matrix[i] = empty_list;
}

console.log(matrix);