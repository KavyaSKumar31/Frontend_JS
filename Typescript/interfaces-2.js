var p = {
    firstName: 'Hari',
    age: 25,
    introduceSelf: function (lastName) {
        console.log("Hello, I  am " + this.firstName + " " + lastName);
        console.log("Hello, I  am " + this.firstName + " " + lastName);
    }
};
p.introduceSelf('Krishna');
console.log(p.firstName);
