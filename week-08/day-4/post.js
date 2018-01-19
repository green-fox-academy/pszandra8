'use strict'

let submitButton = document.querySelector('.submit');
let label = document.querySelector('label');

let alertOfEmptyField = function () {
  if (label.textContent === null || label.textContent === ' ' || label.textContent === '') {
    alert('Please kindly fill out the title and the URL fields!');
  }
}

submitButton.addEventListener('click', alertOfEmptyField);