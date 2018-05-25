'use strict'

let submitButton = document.querySelector('.submit');
let postTitle = document.querySelector('.title');
let postUrl = document.querySelector('.url');


let alertOfEmptyField = function () {
  if (postTitle.value === null || postTitle.value === ' ' || postTitle.value === '') {
    alert('Please kindly fill out the "title" field for posting!');
    }
    else {
      posting();
    }
  }

submitButton.addEventListener('click', alertOfEmptyField);

function posting(){
  let httpRequest = new XMLHttpRequest();

  httpRequest.open('POST', 'http://secure-reddit.herokuapp.com/simple/posts');
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      console.log('HTTP REQUEST SUCCESSFUL');
    }
    else {
      console.log('could not complete the request');
    }
    }
    let post = '{"title": "' + postTitle.value + '","url": "' + postUrl.value + '"};';
    httpRequest.send(post);
}