function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
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

