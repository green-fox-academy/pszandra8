'use strict';

const descriptionInput = document.querySelector('#description');
const priorityInput = document.querySelector('#priority');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const post = {
    action: descriptionInput.value,
    priority: priorityInput.value,
  };
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:8080/posting');
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      console.log('request was successfull');
    }
  };
  httpRequest.send(JSON.stringify(post));
  console.log(post);
});
