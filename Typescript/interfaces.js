function greet(user) {
    console.log('Hello' + user.name);
}
function show(user) {
    console.log("Name:" + user.name);
}
//  const customer1={
//      firstName:'Shiv'
//  }
var customer = {
    name: 'Shiv'
};
//greet(customer1); ERROR
greet(customer);
