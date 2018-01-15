'use strict';

var volvo = {
  type: "Volvo",
  fuel: 23,
  consumption: 0.06,
  kms: 43000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

volvo.ride(42);
console.log(volvo.kms);

var ferrari = {
  type: "Ferrari",
  fuel: 0,
  consumption: 0.12,
  kms: 9000,
  ride: function (km) {
    this.kms += km;
    this.fuel -= km * this.consumption; 
  }
};

function refuel(liters) {
  this.fuel += liters
}

console.log(ferrari.fuel);
refuel.bind(ferrari)(52);
console.log(ferrari.fuel);

let tesla = {
  type: 'Tesla',
  battery : 200,
  kms: 1100,
  consumption: 8,
  ride: function (km) {
    this.kms += km;
    this.battery -= km * this.consumption
  }
}

tesla.ride(36);
console.log(tesla.kms);
console.log(tesla.battery);