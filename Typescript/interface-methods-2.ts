interface ContainsItem {
    (items:string[], itemToSearch: string): boolean;
}

const searchProducts: ContainsItem = (products: string[], productToSearch: string): boolean => {
        return products.indexOf(productToSearch) >= 0;
    }
    const searchUsers: ContainsItem = (users: string[], userToSearch: string): boolean => {
        return users.indexOf(userToSearch) >= 0;
    }
    console.log(searchProducts (
    ['Laptop', 'Watch', 'Shoe'],'Watch'     //RETURNS TRUE
    ));

    console.log(searchUsers (
        ['Ram', 'Bill', 'Bob'],'Will'       //RETURNS FALSE
        ));
        