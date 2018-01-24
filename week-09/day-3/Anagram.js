'use strict'

let isAnagram = function (one, two) {
  let listOne = one.toLowerCase().split('').sort().join('');
  let listTwo = two.toLowerCase().split('').sort().join('');
  if (typeof one !== typeof two) {
    false;
  }
  else if (listOne === listTwo) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;