■コアな型
◇number： 1,5.3,-10など整数や不動小数点を含む全ての数値
◇string：'Hi', "Hi", `Hi` 全ての文字列
◇boolean: true, false
truthy/falsyとは？
  truthyの例：
    true,1,{},[],"0"など
  falsyの例:
    false,0,null,undefined,"",'',NaNなど

■備考
TypeScriptでは、 string や number のようなプリミティブ型は小文字です。
StringやNumberではないので注意してください。

■object型
◇object: {age: 30}
  ネストしたObject 型
  もちろんネストしたObjectの型も定義できます。
  次のようなJavaScript のオブジェクトを考えます。
  const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
  このようなObjectの型は次のようになります。

  {
    id: string;
    price: number;
    tags: string[],
    details: {
      title: string;
      description: string;
    }
  }

■Array型
◇Array: [1,2,3] 要素の型葉柔軟にも、厳格にも指定できる

■Tuple型
◇Tuple: [1,2] TypeScript独自の型、長さ固定の配列

■Enum型
◇Enum: enum{ NEW, OLD } Typescript独自の型、列挙型

■Any型
◇Any: どんな値でも良い

■Union型


■メモ
https://typescript-jp.gitbook.io/deep-dive/type-system
https://www.typescriptlang.org/docs/handbook/basic-types.html