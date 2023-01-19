class BaseDepartment2 {
  static fisicalYear = 2020;

  protected employees: string[] = [];
  constructor(
    public readonly id: string,
    public name: string,
  ) {
    // NG
    // console.log(this.fisicalYear);
    // OK
    console.log(BaseDepartment2.fisicalYear);
  }

  describe(this: BaseDepartment2) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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

class AccountingDepartment extends BaseDepartment2 {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
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
}

const accountingDepartment = new AccountingDepartment('d2', []);
// setter
accountingDepartment.mostRecentReport = '通期会計レポート';
accountingDepartment.addReport('Something');
// getterは()不要
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.printReports();

accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
accountingDepartment.printEmployeeInfoMation();

// static
console.log(BaseDepartment2.createEmployee('staticMax'), BaseDepartment2.fisicalYear);