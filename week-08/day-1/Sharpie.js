class Sharpie {
  constructor(color, width) {
    this.color = color;
    this.width = width;
    this.inkAmount = 100;
  }

  use() {
    if (this.inkAmount < this.width) {
      this.width = this.inkAmount;
      this.inkAmount -= this.width;
    } else {
      this.inkAmount -= this.width;
    }
  }
}

let sharpieOne = new Sharpie('pink', '101');
let sharpieTwo = new Sharpie('blue', '1');

console.log(sharpieOne);
console.log(sharpieTwo);

sharpieOne.use();
sharpieTwo.use();

console.log(sharpieOne);
console.log(sharpieTwo);