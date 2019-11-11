
function fun() {
    console.log("fun");
}
function combineArrays<T>(a1: T[], a2: T[]): T[] {
    return [...a1, ...a2];
}
fun();
//GENERICS
const names:string[] = combineArrays <string> (["kitty","kavya"], ["karunya", "ashish"]);
console.log(names);
const numbers = combineArrays <number> ([10,20, 30, 40, 50], [60, 70]);
console.log(numbers);
const anyvalues = combineArrays <any> ([10,20, "kitty"], [true, undefined]);
console.log(anyvalues);


class Employee_ {
    eid: number;
}
const hrEmployees: Employee_[] = [
    new Employee_(), new Employee_()];

const itEmployees: Employee_[] = [
    new Employee_(),new Employee_()];

let allEmployees = combineArrays<Employee_> (hrEmployees, itEmployees);
console.log(allEmployees);
