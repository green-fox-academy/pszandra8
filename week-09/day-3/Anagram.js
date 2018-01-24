'use strict'

let isAnagram = function (one, two) {
  let listOne = one.sort();
  let listTwo = two.sort();
  if (listOne === listTwo) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;