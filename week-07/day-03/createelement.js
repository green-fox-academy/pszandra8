const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

let list = document.querySelector('ul.asteroids');
list.removeChild(document.querySelector('li'));

for (let i = 0; i <= planetData.length, i++) {
    if (planetData[i].asteroid === true) {
      let newItem = document.createElement('li');
      list.appendChild(newItem);
      newItem.classList.add(planetData[i].category);
      newItem.textContent = planetData[i].content;
    }
  }