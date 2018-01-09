'use strict';

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];

function numChecker(listOfNumbers) {
    let elements = [4, 8, 12, 16];
    for (let i = 0; i <= listOfNumbers.length; i++) {
        for (let j = 0; i <= elements.length; i++) {
            if (listOfNumbers[i] === elements[j]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}

console.log(numChecker(listOfNumbers));