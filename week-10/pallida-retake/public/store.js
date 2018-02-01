'use strict';

window.addEventListener('load', () => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `http://localhost:8080/warehouse`);
    httpRequest.setRequestHeader('Accept', '*');
    httpRequest.setRequestHeader('Content-type', 'application/json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      console.log(response)
      response.forEach(element => tableCreator(element));}
    }})

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let httpRequest = new XMLHttpRequest();
    let item_name = event.target.elements.namedItem('itemSelector').value;
    let size = event.target.elements.namedItem('sizeSelector').value;
    let quantity = event.target.elements.namedItem('quantity').value;
    httpRequest.open('GET', `http://localhost:8080/warehouse/?item=${item_name}&size=${size}&quantity=${quantity}`);
    httpRequest.setRequestHeader('Accept', '*');
    httpRequest.setRequestHeader('Content-type', 'application/json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      console.log(response)
      response.forEach(element => tableCreator(element));
    }
    }
  })

const tableCreator = function(element) {
  let table = document.querySelector('table');
  let head = document.createElement('thead');
  let headRow = document.createElement('tr');
  let body = document.createElement('tbody');
  let bodyrow = document.createElement('tr');
  table.appendChild(head);
  table.appendChild(headRow);
  table.appendChild(body);
  table.appendChild(bodyrow);

  for (let i = 0; i <5; i++) {
    let headField = document.createElement('th');
    head.appendChild(headField);
    let headFieldContent = ['item name', 'manufacturer', 'category', 'size', 'unit price'];
    headField.textContent = headFieldContent[i];
  }
  let data = document.createElement('td');
  data.textContent = element.item_name;
  bodyrow.appendChild(data);
  let data2 = document.createElement('td');
  data2.textContent = element.manufacturer;
  bodyrow.appendChild(data2);
  let data3 = document.createElement('td');
  data3.textContent = element.category;
  bodyrow.appendChild(data3);
  let data4 = document.createElement('td');
  data4.textContent = element.size;
  bodyrow.appendChild(data4);
  let data5 = document.createElement('td');
  data5.textContent = element.unit_price;
  bodyrow.appendChild(data5);
}