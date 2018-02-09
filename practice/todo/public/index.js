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
      containerCreator();
      response.forEach(element => createList(element));
      }
  }
  httpRequest.send();
}

const containerCreator = function () {
  const container = document.querySelector('div');
  container.innerHTML = '';
  let ul = document.createElement('ul');
  container.appendChild(ul);
}

const createList = function(element) {
  let ul = document.querySelector('ul');
  let listElement = document.createElement('li');
  ul.appendChild(listElement);
  listElement.textContent = element.action + ' - ' + element.priority + ' - ' + element.status;
  if (element.priority === '1') {
    listElement.classList.add('highPrio');
  }
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('id', element.id);
  listElement.appendChild(deleteButton);
  deleteButton.addEventListener('click', deleteListElement);
}


const deleteListElement = function (event) {
  console.log(event.target.id);
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('DELETE', `http://localhost:8080/delete/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      console.log('successfull delete');
      mainPaigeRenderer('GET', '/todos');
  }
  }
  httpRequest.send();
}