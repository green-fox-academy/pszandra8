'use strict';

let s = [1, 2, 3, 8, 5, 6];

s = s.map(function(item) 
    { return item == 8 ? 4 : item;
});

console.log(s[3]);
console.log(s);