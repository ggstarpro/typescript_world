class Department {
  // private readonly id: string; コンストラクタで宣言すればショートカット可能
  public name: string; // publicは書く必要はない
  private employees: string[] = [];

  constructor(private readonly id: string, n: string) {
    this.name = n
  }

  describe() {
    console.log(`Department> id:${this.id} name:${this.name}`);
  }

  describeThis(this: Department) {
    console.log('Department>' + this.name);
  }

  addEmployee(employee: string) {
    // this.id = 'readonlyにより変わらない';
    this.employees.push(employee);
  }
  printEmployeeInfoMation()
  {
    console.log(`長さ:${this.employees.length} 中身:${this.employees}`);
  }
}

// コンストラクタ関数
const accounting = new Department('d1s', '名前');
console.log(accounting);
  // Department {name: '名前'}
  // id: "d1s"
  // name: "名前"
  // [[Prototype]]:
  // Objectconstructor:
  // class Department
  // [[Prototype]]: Object

accounting.describe(); // Department> id:d1s name:名前

// thisについて： その関数を呼び出すための責任のあるオブジェクトを参照します。
const accountingCopy = { describe: accounting.describe }
accountingCopy.describe(); //Department> id:undefined name:undefined

const accountingCopy2 = { name: 'テスト', describeThis: accounting.describe }
accountingCopy2.describeThis(); // Department> id:undefined name:テスト

//　private&public 修飾子
accounting.addEmployee('Max');
accounting.addEmployee('Windows');
// accounting.employees[2] = 'privateでない場合は、メソッドを使わなくても追加できてしまいます。'
accounting.printEmployeeInfoMation(); // 長さ:2 中身:Max,Windows

// readonly初期値設定後は変わらない