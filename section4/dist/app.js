"use strict";
// default parameter should come last
const add = (a, b = 1) => a + b;
// copying objects
const person = {
    firstName: "Xablau",
    age: 123,
};
const copiedPerson = Object.assign({}, person);
// spread op in functions
const newAdd = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr);
};
console.log(newAdd(1, 2, 3, 4, 5, 6, 7, 7, 8));
// array and object destructuring
const hobbies = ["Jump", "Fall", "Sleep"];
const [hb1, ...remainingHobbies] = hobbies;
console.log(hb1);
console.log(remainingHobbies);
// obj vars should be the same as the keys
const { firstName, age } = person;
console.log(firstName);
console.log(age);
const { firstName: user, age: oldness } = person;
console.log(user);
console.log(oldness);
//# sourceMappingURL=app.js.map