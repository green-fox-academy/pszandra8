'use strict';

let students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]


function lotOfCandies(students) {
    for (let i in students) {
        if (students[i]['candies'] > 4) {
            console.log(students[i]['name']);
        }
    }
}

function average(students) {
    let candy = 0;
    for (let i in students) {
        candy += students[i]['candies'];
    }
    for (let j in students) {
        return candy / students.length;
    }
}

lotOfCandies(students);
console.log(average(students));