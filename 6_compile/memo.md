■watchモード
ファイルの変更を監視する
$ tsc app.ts --watch or $ tsc app.ts --w

■プロジェクト全体のコンパイル方法
$ tsc --init
tsconfig.jsonが作成される
$ tsc or  tsc --watch

■ファイルのInclude&Excludeの設定
// 除外
"exclude": [
  "analytics.ts",
  "*.dev.ts",
  "**/*.dev.ts",
  "node_modules",
],
"include": [
  "app.ts",
  "analytics.ts",
],
"files": [
  "app.ts"
]

■コンパイルターゲット
// TypeScriptはJavaScriptにコンパイルされるため、その時にどのバージョンのJavaScriptで出力するかをtargetで指定します。
// 利用環境が想定できないならes3やes5
"target": "es6",


■Lib設定
// コンパイルする際に使用する組み込みライブラリを指定する。
// 基本的にはtargetで指定しているjsのバージョンに含まれているものは暗黙的に指定される。
// ただし、targetに指定しているjsのバージョンには含まれていない組み込みライブラリを使用する場合は、明示的な指定が必要。
"lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"],

■allowJS
これをtrueにしておくと、.jsと.jsxもコンパイル対象に含まれるようになる。
部分的にjsで書いている場合などにtrueにする。
■checkJs
allowJsの上記の記事のコメントで会話されているように、JSDocを使うことでjsファイルの型チェックを行うオプションです。
tsで書き直すことは出来ないけど、型チェックの恩恵を受けたいみたいな場合に、JSDocの追加だけなら許容できる
（コメントの追加であってコードの変更じゃないから）みたいな場面があるんでしょうか。

■sourceMap
こちらは型定義ではなく、jsのmapファイル。
デバッグで役立つ
{"version":3,"file":"app.js","sourceRoot":"","sources":["app.ts"],"names":[],"mappings":";AAAA,OAAO,CAAC,GAAG,CAAC,eAAe,CAAC,CAAC"}
ブラウザ>Source>.tsファイルを見ることができる

■rootDirとoutDir(ソースフォルダの出力先フォルダの設定)
"outDir": "./dist",
"rootDir": "./src",

■ removeComments
コンパイル結果の出力ファイルから、コンパイル対象のファイル上のコメントを削除する。
ただし、著作権表示を表す/*!から始まるファイル先頭のコメントは、その直下に空行が存在する限り保持される。
"removeComments": true,

■ noEmit
trueにするとコンパイル結果を出力しなくなる。
tscによる型チェックだけを機能として利用したい場合（Babelなど他ツールが実際のコンパイルを行う場合）に使用する。

■downlevelIteration
古いJSをターゲットに出力する場合、for文がうまく動かない時のみtrueにする。
targetがES3またはES5の時に、ジェネレータのyield*やfor..of構文などのイテレータを使用した記法を配列・文字列以外で使用する際にtrueにする。

■コンパイルエラー時にJavascriptの出力をしない設定
"noEmitOnError": false,
trueにするとエラーがあればコンパイルされない。
エラーがないものに関しても出力されない。

■厳格な型チェックオプション
◇strict
"strict": true,

このオプション自体は特定の機能を有効にするものではなく、このオプションをtrueにすると、下記のオプションが全てtrueになる。
--noImplicitAny
--noImplicitThis
--alwaysStrict
--strictBindCallApply
--strictNullChecks
--strictFunctionTypes
--strictPropertyInitialization


◇"noImplicitAny"
暗黙的にanyになる値をエラーにする。
◇strictNullChecks
Nullableな値に対してオプションの呼び出しを行う記述をエラーにする。
◇strictFunctionTypes
関数代入時の引数の型チェックにおいて、TypeScriptのデフォルトはBivariantlyな挙動だが、このオプションをtrueにするとContravariantlyに型チェックが走るようになる。
◇strictBindCallApply
bind, call, applyを使用する際に、より厳密に型チェックが行われるようになる。

■コード品質に寄与するオプション
"noUnusedLocals": true,
  宣言されたが使用されていない変数が存在する場合にコンパイルエラーにする。
  デフォルト値はfalse。とりあえずtrueにしておけ系。
  開発中にめんどくさいみたいな時は一時的にfalseにしたりするかも。

"noUnusedParameters": true,
  関数の作成時、定義しているのに中身のコードで使用されない場合にコンパイルエラーにする。
  デフォルトfalse。とりあえずtrueにしておけ...系？少なくとも自分はtrueで良いと思う。
"noImplicitReturns": true,
  all code pathsっていうのは、条件分岐した場合に全ての状況で、という意味ですね。
  つまり関数内で、条件分岐の条件によって明示的なreturnがされないルートがある場合、コンパイルエラーになります。

  このエラーが出る場合、だいたいは設計ミスでもっと良い書き方がある（早期リターンとか関数の分離とか）気もするので、それに気づかせてくれるという意味でとりあえずtrueにしておけば良い気はします。
"noFallthroughCasesInSwitch": true,
  fallthroughというのはswitch文のcase内でbreakが無い場合に、その下のcaseの処理も実行される仕様のことです。
  jsではfallthroughが発生するので、breakを書かないとどんどん下のcase文が実行されていきます。
  これオプション名からわかりにくいんですが、fallthroughなcaseのうち、1行以上処理が存在しているにも関わらず脱出処理（breakやreturn）が無いものにエラーを吐きます。

  とりあえずtrueにしておけ系。



【補足】Chrome for Debugger (非推奨) の代わりに JavaScript Debugger を使用する手順
次のレクチャー（Visual Studio Code を利用してデバッグする方法）のなかで説明している「Chrome for Debugger」は2021年後半に非推奨 (deprecated) となりました。
Chrome for Debugger (deprecated) の代わりに、Microsoft が提供している JavaScript Debugger プラグイン（最初から Visual Studio Code に組み込まれています）を使用してください。

JavaScript Debugger プラグインを使用し、Chrome ブラウザ + Visual Studio Code でデバッグする手順
「JavaScript Debugger」プラグインは Visual Studio Code に最初から組み込まれています。
手動でインストールする必要はありません。
TypeScript (または JavaScript) コードをデバッグしたい場合は次の手順を参考にお試しください。

1.まず、Visual Studio Code を起動します。

2.これまで通り、ターミナルからnpm startコマンドで 開発用サーバーを起動します (別途tsc -w コマンドで TypeScript のコンパイラを起動しておくのを忘れないでください）。

3.Visual Studio Code 上でソースの任意の場所にブレークポイントを設定してください。

4.Cmd + Shift + P (Windows の場合は Ctrl + Shift + P) のショートカットーキーから、
コマンドDebug: Open Linkを検索し、Enter キーで選択します。

5.ダイアログボックスにhttp://localhost:3000/を入力してください (異なるポート番号で開発用サーバを起動している場合は適宜 URL を修正してください)。

6.自動的にデバッグ用のブラウザが開きます。

7.ブレークポイントに到達すると、ブラウザの JavaScript の実行プロセスが停止し、Visual Studio Code 上でデバッグすることができます。

Debug: Open Linkコマンドでデバッグを開始する際には、デバッグ用の Chrome プロセスが既に起動していないか確認してください。
すでに起動しているデバッグ用の Chrome プロセスは終了してから、Debug: Open Linkコマンドを実行してください。

■リンク
・tsconfig
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
.コンパイラオプション
https://www.typescriptlang.org/docs/handbook/compiler-options.html
・vscodeでのts debug
https://code.visualstudio.com/docs/typescript/typescript-debugging