// let const
const userName = 'Max'
let year = 2023;

if (true) {
  var varAdult = true;
  // let letAdult = true;
}
console.log(varAdult);
// console.log(letAdult); エラー


// アロー関数
const add = (a: number, b:number ) => {
  return a + b;
}
const add2 = (a: number, b:number ) => a + b;

const printOutput: (output: string | number) => void = output => {
  console.log(output);
};

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}

console.log(add(1,3));
console.log(add2(1,3));

// デフォルト関数パラメータ(右側のみ設定可能)
const add3 = (a: number, b:number = 1 ) => {
  return a + b;
}

// スプレッドオペレータ
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// activeHobbies.push(hobbies[0], hobbies[1])
activeHobbies.push(...hobbies)

const person = {
  name: 'mac',
  age: 30,
}
const copiedPersion = {
  ...person,
};

// レストパラメータ(残余引数)
const add4 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue
  } , 0);
};
const addedNumbers = add4(1,2,3,4,5,6,7,8,9);
console.log(addedNumbers);

// 配列とオブジェクトの分割代入
const hobbies2 = ['Sports', 'Cooking'];
const [hobbiy01, hobbiy02, ...remainingHobbies] = hobbies2
console.log('hobbiy01>');
console.log(hobbiy01);
console.log('hobbiy02>');
console.log(hobbiy02);
console.log('remainingHobbies>');
console.log(remainingHobbies);

const person2 = {
  firstName: 'mac',
  age: 30,
}

const {firstName: valueNameChanged, age} = person2
console.log('firstName>');
console.log(valueNameChanged);
console.log('age>');
console.log(age);