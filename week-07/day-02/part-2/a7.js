'use strict';

var words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];
let temp = words[2];
let temp2 = words[5];
words[2] = temp2;
words[5] = temp;

console.log(words);