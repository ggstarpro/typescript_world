function add(n1:number, n2:number): number {
  return n1 + n2;
}

function printResult(num:number): void {
  console.log(num);
}

// 関数型
let combineValues: Function;
let combineValues2: (a: number, b:number) => number;

combineValues = add;
combineValues2 = add;

console.log(combineValues(1,3));
console.log(combineValues2(1,3));