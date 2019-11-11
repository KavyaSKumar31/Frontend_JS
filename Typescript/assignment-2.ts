class Employee {
    private empId: number;
    private sal: number = 0;
    private basic: number;
    private allowance: number;
    private deductions: number;
    private firstName: string;
    private lastName: string;
    private address: string;
    private pincode: number;
    private realName: string;

constructor(empId: number, basic: number, allowance: number, deductions: number, firstName: string, lastName: string, address: string, pincode: number) {
    this.empId = empId;
    this.basic = basic;
    this.allowance = allowance;
    this.deductions = deductions;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.pincode = pincode;

}
get fullname(): string {
    return this.firstName + this.lastName;
}
set fullname(realName: string) {
    if(realName.length > 0){
        this.realName = realName;  
    }
    else {
        console.log("Enter a valid name");
    }
}
calcSalary(): number {
    this.sal = this.basic + this.allowance - this.deductions;
    return this.sal;
}
}
class PartTimeEmployee extends Employee {
    constructor(empId: string,) {
        super(empId, )
    }
    
    calcSalary(): number  {
        this.sal = this.basic + this.allowance - this.deductions;
        return this.sal;

    }
}