'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

function countCandy(students) {
    let candy = 0;
    for (let i in students) {
        candy += students[i]['candies'];
    }
    console.log(candy);
}

function sum_age(students) {
    let age = 0;
    for (let i in students) {
        if (students[i]['candies'] < 5) {
            age += students[i]['age'];
        }
    }
    console.log(age);
}

countCandy(students);
sum_age(students);