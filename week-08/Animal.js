function Animal(type) {
  this.type = type,
  this.hunger = 5,
  this.thirst = 5,
  this.eat = function() {
    if (this.hunger !== 0) {
      this.hunger -= 1;
    }
  },
  this.drink = function() {
    if (this.thirst !== 0) {
      this.thirst -= 1;
    }
  },
  play = function() {
    if (this.hunger !== 0 && this.thirst !== 0) {
      this.hunger += 1;
    this.thirst += 1;
    }
  }
}

function Farm(slots) {
  this.slots = slots,
  this.animals = [],

  this.breed = function() {
    if (this.slots !== 0) {
      let Sheep = new Animal('sheep');
      this.animals.push(Sheep);
      this.slots -= 1;
    }

  this.slaughter = function() {
    let minHunIndex = 0;
    for (i = 0; i <= animals; i++) {
      if (animals[i].hunger < minHunIndex) {
        minHunIndex = i;
      }
      }
      this.animals.splice(minHunIndex, 1);
      }
    }
}

const SheepFarm = new Farm(20);


console.log(SheepFarm.animals); // Should log 20 Animal objects

// const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full