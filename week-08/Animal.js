function Animal() {
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
      this.animals.push(new Animal());
      this.slots -= 1;
    }
  }

  this.slaughter = function() {
    let minHunIndex = 0;
    for (i = 0; i <= this.animals; i++) {
      if (this.animals[i].hunger < minHunIndex) {
        minHunIndex = i;
      }
      }
      this.animals.splice(minHunIndex, 1);
      }

  this.progress = function() {
    for (i = 0; i <= this.animals.length; i++) {
      let chance = Math.floor(Math.random() * (3 - 1 + 1));
      if (chance === 1) {
        this.animals[i].eat();
      }
      else if (chance === 2) {
        this.animals[i].drink();
      }
      else if (chance === 3) {
        this.animals[i].play();
      }
      }
    }
    this.breed();
    this.slaughter();

  this.reports = function() {
    let animalNum = 0;
    for (i = 0; i <= this.animals; i++) {
      console.log(i);
      animalNum = i;
    if (animalNum === 0) {
      console.log('bankrupt');
    }
    else if (animalNum > 0 && this.slots > animalNum) {
      console.log('okay');
    }
    else if (animalNum === this.slots) {
      console.log('full')
    }
  }
}
}

const SheepFarm = new Farm(20);
SheepFarm.breed();
SheepFarm.breed();
SheepFarm.breed();

console.log(SheepFarm.animals);

console.log(SheepFarm.animals);

const button = document.querySelector('button');
button.addEventListener('click', SheepFarm.progress());