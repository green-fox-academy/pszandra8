'use strict';

function Animal(voice) {
  this.voice = voice;
}

Animal.prototype.say = function() {
  console.log(this.voice);
}

let dog = new Animal('woof');
dog.say();

let cat = new Animal('meow');
cat.say();

let pig = new Animal('oink');
pig.say();

let wolf = new Animal('roar');
wolf.say();