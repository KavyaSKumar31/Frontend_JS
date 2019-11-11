var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function fun() {
    console.log("fun");
}
function combineArrays(a1, a2) {
    return __spreadArrays(a1, a2);
}
fun();
//GENERICS
var names = combineArrays(["kitty", "kavya"], ["karunya", "ashish"]);
console.log(names);
var numbers = combineArrays([10, 20, 30, 40, 50], [60, 70]);
console.log(numbers);
var anyvalues = combineArrays([10, 20, "kitty"], [true, undefined]);
console.log(anyvalues);
var Employee_ = /** @class */ (function () {
    function Employee_() {
    }
    return Employee_;
}());
var hrEmployees = [
    new Employee_(), new Employee_()
];
var itEmployees = [
    new Employee_(), new Employee_()
];
var allEmployees = combineArrays(hrEmployees, itEmployees);
console.log(allEmployees);
