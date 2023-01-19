"use strict";
class BaseDepartment {
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.protectedEmployees = [];
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
    addProtectedEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfoMation() {
        console.log(`長さ:${this.protectedEmployees.length} 中身:${this.protectedEmployees}`);
    }
}
class ITDepartment extends BaseDepartment {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addProtectedEmployee(employee) {
        this.protectedEmployees.push(employee);
    }
}
const itDepartment = new ITDepartment('id', ['管理者1']);
itDepartment.describe();
itDepartment.addProtectedEmployee('protected追加');
itDepartment.printEmployeeInfoMation();
//# sourceMappingURL=2_app_extend_protected.js.map