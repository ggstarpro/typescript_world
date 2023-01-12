// どのような型になるのかわからない
let userInput: unknown;
let userName: string;

userInput = 5;
userInput =' max';
// 型 'unknown' を型 'string' に割り当てることはできません。
// userName = userInput;

if (typeof userInput === 'string') {
  userName = userInput
}
