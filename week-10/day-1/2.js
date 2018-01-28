'use strict';

function Rectangle(length, height) {
  this.length = length;
  this.height = height;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.height;
}

Rectangle.prototype.getCircumference = function() {
  return this.length * 2 + this.height * 2;
}

let a = new Rectangle(2, 3);
let b = new Rectangle(5, 8);
let c = new Rectangle(15, 20);

console.log(a.getArea());
console.log(a.getCircumference());
console.log(b.getArea());
console.log(b.getCircumference());
console.log(c.getArea());
console.log(c.getCircumference());