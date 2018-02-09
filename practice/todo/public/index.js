'use strict';

window.addEventListener('load', () => {
  mainPaigeRenderer('GET', '/todos');
})

//main page renderer
const mainPaigeRenderer = function(method, query) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `http://localhost:8080${query}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      console.log(response);
      response.forEach(element => createList(element));
      }
  }
  httpRequest.send();
}

let table = document.querySelector('table');
let ul = document.querySelector('ul');

const createList = function(element) {
  let listElement = document.createElement('li');
  ul.appendChild(listElement);
  listElement.textContent = element.action + ' - ' + element.priority + ' - ' + element.status;
  if (element.priority === '1') {
    listElement.classList.add('highPrio');
  }
}