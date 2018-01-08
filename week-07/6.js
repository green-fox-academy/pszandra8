'use strict';

let hoursSpent = 6;
let semesterInDays = 17 * 5;
let workingHours = 52;
let workingPerSemester = 17 * workingHours;

console.log(workingPerSemester);
console.log(hoursSpent * semesterInDays / (workingPerSemester / 100) + '%');