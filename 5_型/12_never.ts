function generateError(message: string, code: number): never {
  // 絶対に戻り値を返さない
  throw { message: message, errorCode: code}
}

const result = generateError('エラーが発生しました', 500)
console.log(generateError);