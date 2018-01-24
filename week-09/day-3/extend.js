'use strict';

// Adds a and b, returns as result
const addNumbers = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid value');
  }
  return a+b;
}

// Returns the highest value from the three given params
const maxOfThree = function(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new Error('Invalid value');
  } else {
    if (a > b) {
      return a;
    } else {
      return c;
    }
  }
}

//Returns the median value of a list given as param
const median = function(pool){
  for (let i = 0; i < pool.length; i++) {
    if (typeof pool[i] !== 'number') {
      throw new Error('Invalid value');
    }
    else {
      if (pool.length < 1) {
        return null;
      }
      else if (pool.length % 2 !== 0) {
        return(pool[(pool.length - 1) / 2]);
      }
      else {
        return (pool[pool.length / 2 - 1] + pool[pool.length / 2]) / 2.0;
      }
  }
}
}

// Returns true if the param is a vovel
const isVovel = function(char){
  if (char === '') {
    throw new Error('Please, give me one character');
  }
  else {
    if ('aeiouéáőűöüóí'.indexOf(char) !== -1) {
      return true;
    } else{
      return false;
    }
  }
}

// Create a method that translates hungarian into the teve language
const translate = function(hungarian) {
  let text = hungarian.split('');
  let teve = '';
  text.forEach(function(char){
    if (isVovel(char)){
      teve += char + 'v'+ char;
    }
  });
  return teve;
}

module.exports = {
  addNumbers: addNumbers,
  maxOfThree: maxOfThree,
  median: median,
  isVovel: isVovel,
  translate: translate
}