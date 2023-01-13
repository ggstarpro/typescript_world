function generateError(message, code) {
    // 絶対に戻り値を返さない
    throw { message: message, errorCode: code };
}
var result = generateError('エラーが発生しました', 500);
console.log(generateError);
