var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = 'Hari';
    }
    Employee.prototype.introduceSelf = function (lastName) {
        console.log("Hi! I am " + lastName);
    };
    ;
    return Employee;
}());
var emp = new Employee();
emp.introduceSelf('Krishna');
console.log(emp.firstName);
