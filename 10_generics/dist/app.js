"use strict";
const names1 = [];
const names2 = ['MAX', 'Manuel'];
const names4 = [];
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('終わりました');
    }, 2000);
});
promise1.then(data => {
    data.split(' ');
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('終わりました');
    }, 2000);
});
promise2.then(data => {
    data.split(' ');
});
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObj = merge({ name: '名前' }, { age: 39 });
console.log(mergedObj.age);
function merge2(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObj2 = merge2({ name: '名前' }, { age: 30 });
console.log(mergedObj2);
function countAndDescribe(element) {
    let descriptionText = '値がありません';
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です。';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("お疲れ様です。"));
console.log(countAndDescribe(['test', 'test2']));
function extracAndCover(object, key) {
    return 'value:' + object[key];
}
extracAndCover({ name: 'Max' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('data1');
textStorage.addItem('data2');
textStorage.addItem('data3');
textStorage.addItem('data4');
textStorage.removeItem('data3');
console.log(textStorage.getItems());
function createCourseGoal(title, descriptoin, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.descriptoin = descriptoin;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['max1', 'max2'];
//# sourceMappingURL=app.js.map