interface User {
    name: string;
}
 function greet(user: User) {
     console.log('Hello'+ user.name);
 }
 function show(user: User){
     console.log("Name:"+ user.name);
 }
//  const customer1={
//      firstName:'Shiv'
//  }

 const customer={
    name:'Shiv'
}
 //greet(customer1); ERROR
 greet(customer);