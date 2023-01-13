"use strict";
const userName = 'Max';
let year = 2023;
if (true) {
    var varAdult = true;
}
console.log(varAdult);
const add = (a, b) => {
    return a + b;
};
const add2 = (a, b) => a + b;
const printOutput = output => {
    console.log(output);
};
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
console.log(add(1, 3));
console.log(add2(1, 3));
const add3 = (a, b = 1) => {
    return a + b;
};
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'mac',
    age: 30,
};
const copiedPersion = Object.assign({}, person);
const add4 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add4(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(addedNumbers);
const hobbies2 = ['Sports', 'Cooking'];
const [hobbiy01, hobbiy02, ...remainingHobbies] = hobbies2;
console.log('hobbiy01>');
console.log(hobbiy01);
console.log('hobbiy02>');
console.log(hobbiy02);
console.log('remainingHobbies>');
console.log(remainingHobbies);
const person2 = {
    firstName: 'mac',
    age: 30,
};
const { firstName: valueNameChanged, age } = person2;
console.log('firstName>');
console.log(valueNameChanged);
console.log('age>');
console.log(age);
//# sourceMappingURL=app.js.map