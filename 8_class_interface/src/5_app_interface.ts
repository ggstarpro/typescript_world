// Q.typeを使っても同じことができるがなぜ必要か？？？
// interfaceはオブジェクトの構造を記述するためだけに使える。
// Q.abstructとの違いは?
// interfaceは何も実装を持たない, absctuctは抽象も具体的な実装も持てる。
interface PersonInterface {
  // 初期化はできない
  // name: string = 'person';

  // publicやprivateはつけれないがreadonlyは使える
  readonly name: string;
  greet(phrase: string): void;
}

type PersonType = {
  name: string;
  greet(phrase: string): void;
}

class PersonTest implements PersonInterface {
  constructor(public name: string, public age: number = 20) {

  }
  greet(phrase: string): void {
    console.log(phrase + '私の名前は' + this.name + this.age + '歳です');
  }
}

//
let user1: PersonInterface;
user1 = {
  name: '名前',
  greet(phrase: string) {
    console.log(phrase + '>>' + this.name);
  }
}
user1.greet('Hello>>');

//
let user2: PersonInterface;
user2 = new PersonTest('天寸都');
user2.greet('Hello>>');

//
console.log(user1); // {name: '名前', greet: ƒ}
console.log(user2); // PersonTest {name: '天寸都', age: 20}
