class BaseDepartment {
  // private readonly id: string; コンストラクタで宣言すればショートカット可能
  public name: string; // publicは書く必要はない
  private employees: string[] = [];

  // サブクラスからのプロパティへのアクセスを許可
  protected protectedEmployees: string[] = [];
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

  addProtectedEmployee(employee: string) {
    // this.id = 'readonlyにより変わらない';
    this.employees.push(employee);
  }

  printEmployeeInfoMation()
  {
    console.log(`長さ:${this.protectedEmployees.length} 中身:${this.protectedEmployees}`);
  }
}

class ITDepartment extends BaseDepartment {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    // superの後
    this.admins = admins;
  }

  // オーバライド
  // addEmployee(employee: string) {
    // プロパティ 'employees' はプライベートで、クラス 'BaseDepartment' 内でのみアクセスできます。ts(2341)
    // this.employees.push(employee);
  // }
  addProtectedEmployee(employee: string) {
    this.protectedEmployees.push(employee);
  }
}

const itDepartment = new ITDepartment('id', ['管理者1']);
itDepartment.describe(); // Department> id:id name:IT
itDepartment.addProtectedEmployee('protected追加');
itDepartment.printEmployeeInfoMation();
