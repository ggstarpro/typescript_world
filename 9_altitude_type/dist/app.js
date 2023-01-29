"use strict";
var _a;
const e1 = {
    name: '名前',
    privileges: ['create-server'],
    startDate: new Date()
};
const e2 = {
    name: '名前',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfomation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployeeInfomation(e1);
printEmployeeInfomation({ name: '名前', startDate: new Date() });
class Car {
    drive() {
        console.log('運転中');
    }
}
class Truck {
    drive() {
        console.log('トラックを運転中');
    }
    loadCargo(amount) {
        console.log('荷物を載せています:' + amount);
    }
}
const v1 = new Car;
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('移動速度>' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const paragraph = document.querySelector('p');
const paragraphId = document.getElementById('message-output');
const userInputElement1 = document.getElementById('user-input');
const userInputElement2 = document.getElementById('user-input');
userInputElement1.value = 'こんにちは';
userInputElement2.value = 'こんにちは2';
const userInputElement3 = document.getElementById('user-input');
if (userInputElement3) {
    userInputElement3.value = 'こんにちは3';
}
const errorBag = {
    email: '正しいメールアドレスではありません',
    1: '1はstringとして見られる',
    username: 'ユーザ名に記号を含めることはできません',
};
const result1 = add(1, 5);
const result2 = add('hello', ' test');
result2.split(' ');
const fechedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'developer',
        description: 'hello',
    }
};
console.log(fechedUserData.job && fechedUserData.job.title);
console.log((_a = fechedUserData === null || fechedUserData === void 0 ? void 0 : fechedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
//# sourceMappingURL=app.js.map