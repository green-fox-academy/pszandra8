'use strict';

//if window loads render the paige
window.addEventListener('load', () => {
  mainPaigeRenderer('GET', '/planets');
})

//main page renderer
const mainPaigeRenderer = function(method, query) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open(method, `http://localhost:8080${query}`);
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      let response = JSON.parse(httpRequest.responseText);
      createThead();
      response.forEach(element => createTBody(element));
      }
  }
  httpRequest.send();
}
//table select
let table = document.querySelector('table');

//head content and tbdody creator
function createThead(){
  //rerender table
  table.innerHTML = '';
  let thead = document.createElement('thead');
  table.appendChild(thead);
  for (let i = 0; i < 4; i++) {
    let headField = document.createElement('th');
    let headFieldContent = ['Planet', 'Population', 'Spaceship location', 'People on ship'];
    headField.textContent = headFieldContent[i];
    thead.appendChild(headField);
  }
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
}

//body content
const createTBody = function(element) {
  const tbody = document.querySelector('tbody');
  const trow = document.createElement('tr');
  tbody.appendChild(trow);
  
  //planets
  const planets = document.createElement('td');
  planets.textContent = element.name;
  trow.appendChild(planets);

  //population
  const population = document.createElement('td');
  population.textContent = element.population;
  trow.appendChild(population);

  //spaceship location
  if (element.planet === element.name) {
    const spaceshipLocation = document.createElement('td');
    spaceshipLocation.classList.remove('move');
    spaceshipLocation.removeAttribute('id', element.id);
    spaceshipLocation.classList.add('toPlanetToShip');
    trow.appendChild(spaceshipLocation);

    //creating link
    const toPlanet = document.createElement('button');
    toPlanet.innerHTML = '&#8592; to planet'
    toPlanet.setAttribute('id', element.id);
    spaceshipLocation.appendChild(toPlanet);
    toPlanet.addEventListener('click', peopleToPlanet);

    //creating link
    const toShip = document.createElement('button');
    toShip.innerHTML = ' to ship&#8594;'
    toShip.setAttribute('id', element.id);
    spaceshipLocation.appendChild(toShip);
    toShip.addEventListener('click', peopleToShip);

    //people on ship
    const utilization = document.createElement('td');
    utilization.textContent = element.utilization;
    trow.appendChild(utilization);
  } else {
      const spaceshipLocation = document.createElement('td');
      spaceshipLocation.classList.remove('toPlanetToShip');
      spaceshipLocation.classList.add('move');
      trow.appendChild(spaceshipLocation);
      const moveHereButton = document.createElement('button');
      moveHereButton.textContent = 'MOVE HERE';
      moveHereButton.setAttribute('id', element.id);
      spaceshipLocation.appendChild(moveHereButton);
      moveHereButton.addEventListener('click', moveHere);

    //people on ship
      const poepleOnShip = document.createElement('td');
      poepleOnShip .textContent = '-';
      trow.appendChild(poepleOnShip );
  }
}

//planets endpoint
const planets = mainPaigeRenderer('GET', '/planets');

//movehere endpoint
const moveHere = function(event) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', `http://localhost:8080/movehere/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      mainPaigeRenderer('GET', '/planets');
    }
  }
  httpRequest.send();
}

//toplanet endpoint
const peopleToPlanet = function(event) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', `http://localhost:8080/toplanet/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      mainPaigeRenderer('GET', '/planets');
      }
  }
  httpRequest.send();
}

//toship endpoint
const peopleToShip = function(event) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', `http://localhost:8080/toship/${event.target.id}`);
  httpRequest.setRequestHeader('Accept', '*');
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === httpRequest.DONE && httpRequest.status === 200) {
      mainPaigeRenderer('GET', '/planets');
      }
  }
  httpRequest.send();
}