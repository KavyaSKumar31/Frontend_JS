interface Person {
    firstName: string;
    age?:  number;
    introduceSelf(lastName: string): void;
}
class Employee implements Person {
    firstName: string = 'Hari';
    introduceSelf(lastName:string): void {
        console.log(`Hi! I am ${lastName}`);
    };
}
const emp: Employee = new Employee();
emp.introduceSelf('Krishna');
console.log(emp.firstName);

