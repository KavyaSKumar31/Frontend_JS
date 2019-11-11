interface Person {
    firstName: string;
    age?: number;
    introduceSelf(lastName: string): void;
    //introduceSelf: (lastName: string) => void;
}
const p: Person = {
    firstName: 'Hari',
    age: 25,
    introduceSelf(lastName: string): void {
        console.log(`Hello, I  am ${this.firstName} ${lastName}`);
        console.log("Hello, I  am " +  this.firstName + " "  +  lastName);
    }
};
p.introduceSelf('Krishna');
console.log(p.firstName);