'use strict';

function printer(...args) {
    for (let i = 0; i <= args.length; i++) {
        console.log(args[i]);
    }
}

printer(1, false, 'hi');