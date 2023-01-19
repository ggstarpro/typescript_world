interface INamed {
  readonly name?: string;
  // 任意にしたい場合は「?」
  outputName?: string;
}

interface IGreetable {
  greet(phrase: string): void;
}

interface IGreetableExNamed extends IGreetable {
  greet(phrase: string): void;
}

class Person implements INamed, IGreetable {
  name?: string;
  age?: number = 20;
  constructor(
    n?: string
  ) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {
    console.log(phrase + '私の名前は' + this.name + this.age + '歳です');
  }
}

//
let user11: Person;
user11 = {
  name: '名前',
  greet(phrase: string) {
    console.log(phrase + '>>' + this.name);
  }
}
user11.greet('Hello>>');

//
let user22: Person;
user22 = new Person();
user22.greet('Hello>>');

//
console.log(user11); // {name: '名前', greet: ƒ}
console.log(user22); // Person {name: '天寸都', age: 20}


// 関数型としてのインターフェース
type AddFn = (a: number,b: number) => number;
let add: AddFn;
add = (n1:number, n2:number) => {
  return n1 + n2;
}

interface IAddFn {
  // 匿名メソッド
  (a: number, b: number): number;
}
let addI: IAddFn;
addI = (n1:number, n2:number) => {
  return n1 + n2;
}