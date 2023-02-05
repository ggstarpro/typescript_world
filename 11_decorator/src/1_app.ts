/**
 * 最初のクラスデコレータ
 * "experimentalDecorators": true,にする
 */
console.log('最初のクラスデコレータ>>>');

function Logger1(constructor: Function) {
  console.log('log出力中');
  console.log(constructor); // Personオジェクト作成前に実行される※インスタンス化のタイミングではない
}

@Logger1
class Person1 {
  name = 'Max1';
  constructor() {
    console.log('personオブジェクト作成中');
  }
}
const person1 = new Person1();

/**
 * デコレータファクトり
 */
console.log('デコレータファクトリ>>>');

function Logger2(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger2('ログ出力中 form Logger2()')
class Person2 {
  name = 'Max2';
  constructor() {
    console.log('personオブジェクト作成中');
  }
}
const person2 = new Person2();


/**
 * 便利なデコレータ
 */
console.log('便利なデコレータ>>>');

function WithTemplate3(template: string, hookId: string) {
  // return function(_: Function) { // 「_」受け取るけど使用しません
  return function(constructor: any) {
    const hookEl =  document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@WithTemplate3('<h1>>>aaa</h1>>>', 'app')
class Person3 {
  name = 'Max2';
  constructor() {
    console.log('personオブジェクト作成中');
  }
}

/**
 * 複数のデコレータの追加
 */
console.log('複数のデコレータの追加>>>');
function WithTemplate4(template: string, hookId: string) {
  console.log('templateファクトリ');
  return function(constructor: any) {
    console.log('templateを表示');
    const hookEl =  document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

function Logger4(logString: string) {
  console.log('logger ファクトリ');
  return function(_: Function) {
    console.log('ログ出力' + logString);
  }
}

// デコレータは下から上へ向かって実行される。
@Logger4('logger')
@WithTemplate4('<h1>>>aaa</h1>>>', 'app')
class Person4 {
  name = 'Max4';
  constructor() {
    console.log('personオブジェクト作成中');
  }
}

/**
 * プロパティデコレータ
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
 */
console.log('プロパティデコレータ>>>');

function Log5_1(target: any, propertyName: string | Symbol) {
  console.log('property デコレータ');
  console.log(target, propertyName);
}

function Log5_2(target: any, propertyName: PropertyDescriptor) {
  console.log('accesor デコレータ');
  console.log(target, propertyName);
}

class Product5 {
  @Log5_1
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this.price = val;
    }
    throw new Error('不正な価格です。');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

/**
 * アクセサとパラメータのデコレータ
 */
console.log('アクセサとパラメータのデコレータ>>>');
// アクセサのためのデコレータはプロパティのデコレータと同じ
function Log6_1(target: any, name: string, description: PropertyDescriptor) {
  console.log('Accessor デコレータ');
  console.log(target);
  console.log(name);
  console.log(description);
}

// メソッドデコレータ
function Log6_2(target: any, name: string | symbol, description: PropertyDescriptor) {
  console.log('メソッドデコレータ');
  console.log(target);
  console.log(name);
  console.log(description);
}
// 最初の引数は、インスタンスメソッドならプロトタイプ、staticメソッドならコンストラクタ関数、
function Log6_3(target: any, name: string | symbol, position: number) {
  console.log('パラメータデコレータ');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product6 {
  title: string;
  private _price: number;

  @Log6_1
  set price(val: number) {
    if (val > 0) {
      this.price = val;
    }
    throw new Error('不正な価格です。');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log6_2
  getPriceWithTax(@Log6_3  tax: number) {
    return this._price * (1 + tax);
  }
}

/**
 * デコレータの実行タイミング
 */
console.log('デコレータの実行タイミング>>>');
// インスタンス化の時に実行されるものではない
const p1 = new Product6('book1', 100);
const p2 = new Product6('book2', 100);

/**
 * クラスデコレータによるクラスの変更
 */
console.log('クラスデコレータによるクラスの変更>>>');
function WithTemplate8(template: string, hookId: string) {
  console.log('templateファクトリ');
  // ... レストパラメータ
  return function<T extends {new(...args: any[]): {name: string} }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._args: any[]) {
        super();
        console.log('templateを表示');
        const hookEl =  document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  }
}

function Logger8(logString: string) {
  console.log('logger ファクトリ');
  return function(_: Function) {
    console.log('ログ出力' + logString);
  }
}

@Logger8('logger')
@WithTemplate8('<h1>>>aaa</h1>>>', 'app')
class Person8 {
  name = 'Max4';
  constructor() {
    console.log('personオブジェクト作成中');
  }
}


/**
 * その他のデコレータの返却値
 */

