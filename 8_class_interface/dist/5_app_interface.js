"use strict";
class PersonTest {
    constructor(name, age = 20) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + '私の名前は' + this.name + this.age + '歳です');
    }
}
let user1;
user1 = {
    name: '名前',
    greet(phrase) {
        console.log(phrase + '>>' + this.name);
    }
};
user1.greet('Hello>>');
let user2;
user2 = new PersonTest('天寸都');
user2.greet('Hello>>');
console.log(user1);
console.log(user2);
//# sourceMappingURL=5_app_interface.js.map