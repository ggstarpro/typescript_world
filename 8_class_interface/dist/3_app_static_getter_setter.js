"use strict";
class BaseDepartment2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(BaseDepartment2.fisicalYear);
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfoMation() {
        console.log(`長さ:${this.employees.length} 中身:${this.employees}`);
    }
    static createEmployee(name) {
        return { name: name };
    }
}
BaseDepartment2.fisicalYear = 2020;
class AccountingDepartment extends BaseDepartment2 {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません。');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const accountingDepartment = new AccountingDepartment('d2', []);
accountingDepartment.mostRecentReport = '通期会計レポート';
accountingDepartment.addReport('Something');
console.log(accountingDepartment.mostRecentReport);
accountingDepartment.printReports();
accountingDepartment.addEmployee('Max');
accountingDepartment.addEmployee('Manu');
accountingDepartment.printEmployeeInfoMation();
console.log(BaseDepartment2.createEmployee('staticMax'), BaseDepartment2.fisicalYear);
//# sourceMappingURL=3_app_static_getter_setter.js.map