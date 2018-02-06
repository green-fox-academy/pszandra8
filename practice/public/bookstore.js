'use strict';

//window load
window.addEventListener('load', () => {
  mainPaigeRenderer('/');
})

//main renderer
const mainPaigeRenderer = function(urlExtension) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', `http://localhost:8080/books?${urlExtension}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.send();
  httpRequest.onreadystatechange = function() {
  if (httpRequest.readyState === 4 && httpRequest.status === 200) {
    let response = JSON.parse(httpRequest.responseText);
    console.log(response);
    createThead();
    response.forEach(element => createTBody(element));
    }
  }
}

//table select
let table = document.querySelector('table');

//head
function createThead(){
  table.innerHTML = '';
  let thead = document.createElement('thead');
  table.appendChild(thead);

//head content
  for (let i = 0; i < 5; i++) {
    let headField = document.createElement('th');
    thead.appendChild(headField);
    let headFieldContent = ['Book title', 'Author name', 'Category', 'Publisher\'s name', 'Price'];
    headField.textContent = headFieldContent[i];
  }
//create body
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
}

//body cotent
const createTBody = function(element) {
  let tbody = document.querySelector('tbody');
  const trow = document.createElement('tr');
  tbody.appendChild(trow);
  
  //title
  const title = document.createElement('td');
  title.textContent = element.book_name;
  trow.appendChild(title);

  //author
  const author = document.createElement('td');
  author.textContent = element.aut_name;
  trow.appendChild(author);

  //category
  const category = document.createElement('td');
  category.textContent = element.cate_descrip;
  trow.appendChild(category);

  //publisher
  const publisher = document.createElement('td');
  publisher.textContent = element.pub_name;
  trow.appendChild(publisher);

  //price
  const price = document.createElement('td');
  price.textContent = element.book_price;
  trow.appendChild(price);
}

const bookFilter = function(event) {
  event.preventDefault();
  //select the search fields
  let submitButton = document.querySelector('submit');
  let publisher = document.getElementById('publisher');
  let priceLo = document.getElementById('price-lo');
  let priceHi = document.getElementById('price-hi');

  //endpoints
  let queryString;
  if (category.value.length !== 0) {
    queryString = `category=${category.value}`;
  }
  if (publisher.value.length !== 0) {
    queryString += `&publisher=${publisher.value}`;
  }
  if (priceLo.value.length !== 0) {
    queryString += `&priceLo=${priceLo.value}`;
  }
  if (priceHi.value.length !== 0) {
    queryString += `&priceHi=${priceHi.value}`;
  }
  mainPaigeRenderer(queryString);
}

//clear search, render original table
const clearHistory = function() {
  mainPaigeRenderer('/');
}

document.querySelector('form').addEventListener('submit', bookFilter);
document.querySelector('.clear').addEventListener('click', clearHistory);