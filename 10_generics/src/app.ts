/**
 * ジェネリック型について
 * Typescriptにおける型安全性を高めることができ、自動補完等の開発サポートを向上することができる
 * https://typescript-jp.gitbook.io/deep-dive/type-system/generics
 */
const names1 = []; // anyl[]
const names2: string[] = ['MAX', 'Manuel'];
// const names3: Array = []; // ジェネリック型 'Array<T>' には 1 個の型引数が必要です。ts(2314)
const names4: Array<string> = [];
// names4[0].split(' ');

// promise: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise
const promise1 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('終わりました');
  }, 2000);
});
promise1.then(data => {
  data.split(' ');
})

const promise2 = new Promise<any>((resolve) => {
  setTimeout(() => {
    resolve('終わりました');
  }, 2000);
});
promise2.then(data => {
  data.split(' ');
})

/**
 * ジェネリック関数の作成
 */
function merge<T extends {}, U>(objectA: T, objectB: U) { // function merge<T, U>(objectA: T, objectB: U): T & U
  return Object.assign(objectA, objectB);
}
const mergedObj = merge({name: '名前'}, {age: 39});
console.log(mergedObj.age);

/**
 * ジェネリクスに制約を追加する
 */
function merge2<T extends object, U extends object>(objectA: T, objectB: U) { // function merge<T, U>(objectA: T, objectB: U): T & U
    return Object.assign(objectA, objectB);
}
// const mergedObj2 = merge2({name: '名前'}, 30); NG
const mergedObj2 = merge2({name: '名前'}, {age: 30});
console.log(mergedObj2);


/**
 * もう一つのジェネリクス関数
 */
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = '値は' + element.length + '個です。';
  }

  return [element, descriptionText]
}
console.log(countAndDescribe("お疲れ様です。"));
console.log(countAndDescribe(['test', 'test2']));


/**
 * keyofの制約
 */
function extracAndCover<T extends object, U extends keyof T>(object: T, key: U) {
  return 'value:' + object[key];
}
// extracAndCover({}, 'name'); // 型 'string' の引数を型 'never' のパラメーターに割り当てることはできません。ts(2345)
extracAndCover({name: 'Max'}, 'name');

/**
 * Genericクラス
 */
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    // プリミティブ 型のみうまくいく
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('data1');
textStorage.addItem('data2');
textStorage.addItem('data3');
textStorage.addItem('data4');
textStorage.removeItem('data3');
console.log(textStorage.getItems()); //(3) ['data1', 'data2', 'data4']

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'max1'});
// objStorage.addItem({name: 'max2'});
// const max3 = {name: 'max3'};
// objStorage.addItem({name: 'max3'});
// objStorage.addItem({name: 'max4'});
// // objStorage.removeItem({name: 'max3'}); // 参照型なためうまくいかない
// // objStorage.removeItem(max3);
// console.log(objStorage.getItems());

/**
 * Generic型のユーティリティ
 */
interface CourseGoal {
  title: string;
  descriptoin: string;
  completeUntil: Date;
}
function createCourseGoal(title: string, descriptoin: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.descriptoin = descriptoin;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['max1', 'max2'];
// names.push('max3'); // プロパティ 'push' は型 'readonly string[]' に存在しません。ts(2339)


/**
 * Generic型 vs Union型
 */

//
// class DataStorage2 {
//   // string | number | boolean　がmixされた配列になってしまいますょ。
//   // private data: (string | number | boolean)[] = [];

//   private data: (string[] | number[] | boolean[]) = [];

//   // 関数の方でどの型でも受け入れてしまう。
//   addItem(item: string | number | boolean) {
//     this.data.push(item);
//   }
//   removeItem(item: string | number | boolean) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }
//   getItems() {
//     return [...this.data];
//   }
// }

