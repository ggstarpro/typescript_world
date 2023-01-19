// 抽象クラスはインスタンス化できない。継承したものがインスタンス化できる
abstract class BaseDepartment3 {
  static fisicalYear = 2020;

  protected employees: string[] = [];
  constructor(
    protected readonly id: string,
    protected name: string,
  ) {
  }

  abstract describe(this: BaseDepartment3): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfoMation() {
    console.log(`長さ:${this.employees.length} 中身:${this.employees}`);
  }

  // static(newしなくても使える)
  static createEmployee(name: string) {
    return {name: name};
  }
}

// 会社の中に１つしかないのでオブジェクトは１つしか作りたくないため、newで1回だけしか作れないようにしたい。=> private constructor
class AccountingDepartment2 extends BaseDepartment3 {
  private lastReport: string;
  private static instance: AccountingDepartment2;

  // ゲッター:何かを返さなければいけない
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('レポートが見つかりません。');
  }

  // セッター
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('正しい値を設定してください。');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    // AccountingDepartment2.instanceでも良い
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment2(Math.random().toString(), []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  describe() {
    console.log('AccountingDepartment>>' + this.id);
  }
}

// クラス 'AccountingDepartment2' のコンストラクターはプライベートであり、クラス宣言内でのみアクセス可能です。ts(2673)
// const accountingDepartment2 = new AccountingDepartment2('d2', []);
const accountingDepartment2 = AccountingDepartment2.getInstance();
const accountingDepartmentTest = AccountingDepartment2.getInstance();
console.log(accountingDepartment2);
console.log(accountingDepartmentTest);