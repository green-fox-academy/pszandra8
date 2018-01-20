'use strict'

let submitButton = document.querySelector('.submit');
let title = document.querySelector('.title');
let url = document.querySelector('.url');

let alertOfEmptyField = function () {
  if (title.value === null || title.value === ' ' || title.value === '') {
    alert('Please kindly fill out the "title" field for posting!');
    }
    else {
      post(string);
      console.log('ok');
    }
  }

submitButton.addEventListener('click', alertOfEmptyField);

let string = {
  'title': title.value,
  'url': url.value
}

function post(string){
  let httpRequest = new XMLHttpRequest();

  httpRequest.open('POST', 'http://secure-reddit.herokuapp.com/simple/posts');
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.send(string);
  string = JSON.stringify(string);
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      console.log('okay');
    }
    else {
      console.log('could not complete the request');
    }
    }
}