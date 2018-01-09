'use strict';

let shopItems = ["Cupcake", 2, "Brownie", false]
for (let i in shopItems) {
    if (shopItems[i] === 2) {
        shopItems[i] = "Croissant";
    }
    else if (shopItems[i] === false) {
        shopItems[i] = "Ice cream";
    }
}

console.log(shopItems);