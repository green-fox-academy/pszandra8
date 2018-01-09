'use strict';

var numbers = [1,2,3,4,5,6,8];

if (7 in numbers) {
    console.log('Hoorray');
}
else {
    console.log('Noooooo');
}