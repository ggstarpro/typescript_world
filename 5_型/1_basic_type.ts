// number型
function addTSVersion(n1: number, n2: number) {
  return n1 + n2;
}
function addJsVersion(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('入力値が正しくありません');
  }
  return n1 + n2;
}

const number1 = 10.5;
const number2 = 2;
console.log(addTSVersion(number1, number2));
console.log(addJsVersion(number1, number2));

// string型,boolean型
const printResult = true;
const resultPhrase = 'result>';
add(number1, number2, printResult, resultPhrase);

function add(n1: number, n2: number, isNeedConsole: boolean, printResult: string) {
  const result = n1 + n2;
  if (isNeedConsole) {
    console.log(printResult + result);
  }
  return result
}

// 変数に対して型推論されるので型を宣言する必要はない
let kataSuiron = 123;
kataSuiron = '123';

let kataSuiron2: number;

let kataSuiron3;




