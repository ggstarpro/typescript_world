/**
 * 交差型:複数の型を結合
 */

// type
type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: '名前',
  privileges: ['create-server'],
  startDate: new Date()
}

// interface
interface IAdmin {
  name: string;
  privileges: string[];
}

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends Employee, Admin {}
const e2: ElevatedEmployee = {
  name: '名前',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

/**
 * 型ガード: union型を使うときに役立つ
 */
function add(a: string, b: string): string; // 関数オーバーロード: 末尾には「;」をつけることを推奨
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnkonwEmployee = Employee | Admin;
function printEmployeeInfomation(emp: UnkonwEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log(emp.privileges);
  }
  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}
printEmployeeInfomation(e1);
printEmployeeInfomation({name: '名前', startDate: new Date() });

// クラスの場合
class Car {
  drive() {
    console.log('運転中');
  }
}
class Truck {
  drive() {
    console.log('トラックを運転中');
  }
  loadCargo(amount: number) {
    console.log('荷物を載せています:' + amount);
  }
}
type Vehicle = Car | Truck;
const v1 = new Car;
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
useVehicle(v1);
useVehicle(v2);

/**
 * 判別可能なUnion型
 */
interface Bird {
  type: 'bird',
  flyingSpeed: number;
}

interface Horse {
  // 別にtypeでなくkindとかでも良い
  type: 'horse',
  runningSpeed: number;
}

type Animal = Bird | Horse;
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
    break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('移動速度>' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});


/**
 * 型キャスト
 */
const paragraph = document.querySelector('p'); // HTMLParagraphElement | null
const paragraphId = document.getElementById('message-output'); // HTMLElement | null
// 型キャスト方法１
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!;
// 型キャスト方法2
const userInputElement2 = document.getElementById('user-input')! as HTMLInputElement;
userInputElement1.value = 'こんにちは';
userInputElement2.value = 'こんにちは2';
// 型キャスト方法3
const userInputElement3 = document.getElementById('user-input');
if (userInputElement3) {
  (userInputElement3 as HTMLInputElement).value = 'こんにちは3';
}

/**
 * インデックス型
 */
interface ErrorContainer { // 例:{email] '正しいメールアドレスでありません, username: 'ユーザ名が正しくありません''}
  // id: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: '正しいメールアドレスではありません',
  1: '1はstringとして見られる',
  username: 'ユーザ名に記号を含めることはできません',
};

/**
 * 関数オーバーロード
 */
const result1 = add(1, 5);
const result2 = add('hello', ' test');
result2.split(' ');

/**
 * オプショナルチェイン
 */
// バックエンドから来たときどのプロパティがあるのかなぁあ？
const fechedUserData = {
  id: 'u1',
  name: 'user1',
  job: { // jobの内容がなかった場合。。。
    title: 'developer',
    description: 'hello',
  }
}
// jsでもできる方法
console.log(fechedUserData.job && fechedUserData.job.title);
// ts3.7以上
console.log(fechedUserData?.job?.title);

/**
 * NULL合体演算子
 */
const userInput = null; // domapiなどからとってきた時はnullかわからない
const storedData = userInput ?? 'DEFAULT'; // nullまたはundefinedの場合