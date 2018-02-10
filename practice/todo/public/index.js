'use strict';

//window loads => render the paige
window.addEventListener('load', () => {
  mainPaigeRenderer('GET', '/todos');
})

//Endpioint
//main page renderer
const mainPaigeRenderer = function(method, query) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `http://localhost:8080${query}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      containerCreator();
      response.forEach(element => createList(element));
      }
  }
  httpRequest.send();
}

//creates container for the list
const containerCreator = function () {
  const container = document.querySelector('div');
  container.innerHTML = '';
  let ul = document.createElement('ul');
  container.appendChild(ul);
}

//creates list
const createList = function(element) {
  let ul = document.querySelector('ul');
  let listElement = document.createElement('li');
  ul.appendChild(listElement);
  listElement.textContent = element.action + ' - ' + element.priority + ' - ' + element.status;
  //if the priority of the todo is 1 then it gets 'highPrio' class
  if (element.priority === '1') {
    listElement.classList.add('highPrio');
  }
  //delete button creation
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  //giving the todo's id to the button
  deleteButton.setAttribute('id', element.id);
  listElement.appendChild(deleteButton);
  //click event
  deleteButton.addEventListener('click', deleteListElement);

  //status change button creation
  const statusButton = document.createElement('button');
  statusButton.textContent = 'Change status';
  //giving the todo's id to the button
  statusButton.setAttribute('id', element.id);
  listElement.appendChild(statusButton);
  //click event
  statusButton.addEventListener('click', changeStatus);
}

//API endpoints
//action what is being called when statusButton is being clicked on
const deleteListElement = function (event) {
  let httpRequest = new XMLHttpRequest();
  //deleting
  httpRequest.open('DELETE', `http://localhost:8080/delete/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  //when rewuest has been successfull then the main page is being rerendered and message is getting logged to the console
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      clientResponse('deletion of item');
      mainPaigeRenderer('GET', '/todos');
  }
  }
  //request send
  httpRequest.send();
}

//action what is being called when statusButton is being clicked on
const changeStatus = function (event) {
  let httpRequest = new XMLHttpRequest();
  //posting
  httpRequest.open('POST', `http://localhost:8080/change/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  //when rewuest has been successfull then the main page is being rerendered and message is getting logged to the console
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      clientResponse('change of status');
      mainPaigeRenderer('GET', '/todos');
  }
  }
  //request send
  httpRequest.send();
}

const clientResponse = function (actionHasBeenDone) {
  console.log(`successfull ${actionHasBeenDone}`);
}