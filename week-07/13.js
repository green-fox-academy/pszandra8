'use strict';

let currentHours = 14;
let currentMinutes = 34;
let currentSeconds = 42;

let currentOverall = 14 * 60 * 60 + 34 * 60 + 42;
let fullDayOverall = 24 * 60 * 60;

console.log(fullDayOverall - currentOverall);