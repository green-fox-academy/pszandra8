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
    current += 1;
    if (current === 4) {
      gallery.style.backgroundImage = pictureProperties[0].category;
      mainText.textContent = pictureProperties[0].content;
      current = 0;
    }
}

function shuffleLeft() {
    gallery.style.backgroundImage = pictureProperties[current - 1].category;
    mainText.textContent = pictureProperties[current - 1].content;
    current -= 1;
    if (current === 0) {
      gallery.style.backgroundImage = pictureProperties[4].category;
      mainText.textContent = pictureProperties[4].content;
      current = 4;   //1st picture doesn show
    }
}

rightButton.addEventListener('click', shuffleRight);
leftButton.addEventListener('click', shuffleLeft);