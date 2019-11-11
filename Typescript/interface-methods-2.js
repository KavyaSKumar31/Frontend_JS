var searchProducts = function (products, productToSearch) {
    return products.indexOf(productToSearch) >= 0;
};
var searchUsers = function (users, userToSearch) {
    return users.indexOf(userToSearch) >= 0;
};
console.log(searchProducts(['Laptop', 'Watch', 'Shoe'], 'Watch' //RETURNS TRUE
));
console.log(searchUsers(['Ram', 'Bill', 'Bob'], 'Will' //RETURNS FALSE
));
