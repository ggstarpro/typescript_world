"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('最初のクラスデコレータ>>>');
function Logger1(constructor) {
    console.log('log出力中');
    console.log(constructor);
}
let Person1 = class Person1 {
    constructor() {
        this.name = 'Max1';
        console.log('personオブジェクト作成中');
    }
};
Person1 = __decorate([
    Logger1
], Person1);
const person1 = new Person1();
console.log('デコレータファクトリ>>>');
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = 'Max2';
        console.log('personオブジェクト作成中');
    }
};
Person2 = __decorate([
    Logger2('ログ出力中 form Logger2()')
], Person2);
const person2 = new Person2();
console.log('便利なデコレータ>>>');
function WithTemplate3(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
let Person3 = class Person3 {
    constructor() {
        this.name = 'Max2';
        console.log('personオブジェクト作成中');
    }
};
Person3 = __decorate([
    WithTemplate3('<h1>>>aaa</h1>>>', 'app')
], Person3);
console.log('複数のデコレータの追加>>>');
function WithTemplate4(template, hookId) {
    console.log('templateファクトリ');
    return function (constructor) {
        console.log('templateを表示');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').textContent = p.name;
        }
    };
}
function Logger4(logString) {
    console.log('logger ファクトリ');
    return function (_) {
        console.log('ログ出力' + logString);
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = 'Max4';
        console.log('personオブジェクト作成中');
    }
};
Person4 = __decorate([
    Logger4('logger'),
    WithTemplate4('<h1>>>aaa</h1>>>', 'app')
], Person4);
console.log('プロパティデコレータ>>>');
function Log5_1(target, propertyName) {
    console.log('property デコレータ');
    console.log(target, propertyName);
}
function Log5_2(target, propertyName) {
    console.log('accesor デコレータ');
    console.log(target, propertyName);
}
class Product5 {
    set price(val) {
        if (val > 0) {
            this.price = val;
        }
        throw new Error('不正な価格です。');
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log5_1
], Product5.prototype, "title", void 0);
console.log('アクセサとパラメータのデコレータ>>>');
function Log6_1(target, name, description) {
    console.log('Accessor デコレータ');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log6_2(target, name, description) {
    console.log('メソッドデコレータ');
    console.log(target);
    console.log(name);
    console.log(description);
}
function Log6_3(target, name, position) {
    console.log('パラメータデコレータ');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product6 {
    set price(val) {
        if (val > 0) {
            this.price = val;
        }
        throw new Error('不正な価格です。');
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log6_1
], Product6.prototype, "price", null);
__decorate([
    Log6_2,
    __param(0, Log6_3)
], Product6.prototype, "getPriceWithTax", null);
console.log('デコレータの実行タイミング>>>');
const p1 = new Product6('book1', 100);
const p2 = new Product6('book2', 100);
console.log('クラスデコレータによるクラスの変更>>>');
function WithTemplate8(template, hookId) {
    console.log('templateファクトリ');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._args) {
                super();
                console.log('templateを表示');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
function Logger8(logString) {
    console.log('logger ファクトリ');
    return function (_) {
        console.log('ログ出力' + logString);
    };
}
let Person8 = class Person8 {
    constructor() {
        this.name = 'Max4';
        console.log('personオブジェクト作成中');
    }
};
Person8 = __decorate([
    Logger8('logger'),
    WithTemplate8('<h1>>>aaa</h1>>>', 'app')
], Person8);
//# sourceMappingURL=1_app%20copy.js.map