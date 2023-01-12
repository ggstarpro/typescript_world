type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number'
    || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
}

const combinedAges = combine(12, 2, 'as-number');
console.log(combinedAges);// 14

const combinedStringAges = combine('Mac', 'Windows', 'as-text');
console.log(combinedStringAges);// MacWindows

const combinedNames = combine('Mac', 'Windows', 'as-number');
console.log(combinedNames); // NaN




// 型エイリアス と Object 型
// 型エイリアスは、あなた自身の型を定義するのに使います。Union 型を入れるためだけではありません。複雑になりやすい Object 型に対しても型エイリアスを使うことができます。

// 例:
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

// 型エイリアスにより、不必要なコードを繰り返し記述することを避けることができます。また、型の定義を一箇所で管理することができます。
// 例）型エイリアスを使っていないコード：
function greet1(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}


// 例）型エイリアスを使ったコード:
type User2 = { name: string; age: number };
function greet2(user: User2) {
  console.log('Hi, I am ' + user.name);
}
function isOlder2(user: User2, checkAge: number) {
  return checkAge > user.age;
}
