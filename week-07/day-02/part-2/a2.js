'use strict';

let girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
let boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
let order = [];

for (let i = 0; i <= girls.length; i++) {
    if (girls[i] === undefined) {
        order.push(boys[i]);
    }
    else {
        order.push(girls[i], boys[i]);
    }
}

console.log(order);