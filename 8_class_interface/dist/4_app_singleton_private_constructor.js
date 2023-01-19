"use strict";
class BaseDepartment3 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
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
BaseDepartment3.fisicalYear = 2020;
class AccountingDepartment2 extends BaseDepartment3 {
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
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment2(Math.random().toString(), []);
        return this.instance;
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
    describe() {
        console.log('AccountingDepartment>>' + this.id);
    }
}
const accountingDepartment2 = AccountingDepartment2.getInstance();
const accountingDepartmentTest = AccountingDepartment2.getInstance();
console.log(accountingDepartment2);
console.log(accountingDepartmentTest);
//# sourceMappingURL=4_app_singleton_private_constructor.js.map