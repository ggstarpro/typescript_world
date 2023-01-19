"use strict";
class Person {
    constructor(n) {
        this.age = 20;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        console.log(phrase + '私の名前は' + this.name + this.age + '歳です');
    }
}
let user11;
user11 = {
    name: '名前',
    greet(phrase) {
        console.log(phrase + '>>' + this.name);
    }
};
user11.greet('Hello>>');
let user22;
user22 = new Person();
user22.greet('Hello>>');
console.log(user11);
console.log(user22);
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let addI;
addI = (n1, n2) => {
    return n1 + n2;
};
//# sourceMappingURL=6_app_nini_interfacefunction.js.map