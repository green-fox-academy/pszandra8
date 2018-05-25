'use strict';

let rightButton = document.querySelector('.right');
let leftButton = document.querySelector('.left');
let gallery = document.querySelector('.galleryContent');
let mainText = document.querySelector('h1');

const pictureProperties = [
  {
    category: "url('first.jpg')",
    content: 'Dogs are fun',
  },
  {
    category: "url('second.jpg')",
    content: 'Dogs are cool',
  },
  {
    category: "url('third.jpg')",
    content: 'More dog pictures',
  },
  {
    category: "url('fourth.jpg')",
    content: 'Dogs are awesome',
  },
  {
    category: "url('fifth.jpg')",
    content: 'Dogs are great',
  }
  ]

let current = 0;

function shuffleRight() {
    gallery.style.backgroundImage = pictureProperties[current + 1].category;
    mainText.textContent = pictureProperties[current + 1].content;
    current++;
    if (current === 4) {
      current = -1;
    }
}

function shuffleLeft() {
    gallery.style.backgroundImage = pictureProperties[current - 1].category;
    mainText.textContent = pictureProperties[current - 1].content;
    current--;
    if (current === 0) {
      current = pictureProperties.length;
    }
}

rightButton.addEventListener('click', shuffleRight);
leftButton.addEventListener('click', shuffleLeft);

// let thumbnail = document.querySelectorAll('li');

// function hover() {
//   thumbnail.style.border = solid 5px black;
// }

// thumbnail.addEventListener('mouseover', hover);