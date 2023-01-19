"use strict";
class Department {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Department> id:${this.id} name:${this.name}`);
    }
    describeThis() {
        console.log('Department>' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfoMation() {
        console.log(`長さ:${this.employees.length} 中身:${this.employees}`);
    }
}
const accounting = new Department('d1s', '名前');
console.log(accounting);
accounting.describe();
const accountingCopy = { describe: accounting.describe };
accountingCopy.describe();
const accountingCopy2 = { name: 'テスト', describeThis: accounting.describe };
accountingCopy2.describeThis();
accounting.addEmployee('Max');
accounting.addEmployee('Windows');
accounting.printEmployeeInfoMation();
//# sourceMappingURL=1_app_class_constuctor_shorcut_readonly.js.map