'use strict';

let al = 'Greenfox';

function greet(text) {
    if (text === undefined) {
        console.log('What is your name?');
    }
    else {
        console.log('Greetings, dear ' + text)
    }
}

greet();
greet(al);