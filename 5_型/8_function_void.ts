function add(n1:number, n2:number): number {
  return n1 + n2;
}

function printResult(num:number): void {
  console.log(num);
}

// undefinedは使うべきでない
function printResult2(num:number): undefined {
  console.log(num);
  return;
}

printResult(add(1,2));
