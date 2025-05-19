const accountId = 144553
let accountEmail = "bhaskar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //Not allowed

accountEmail = "b@kc.com"
accountPassword = "213234"
accountCity = "Kathmandu"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefet not to use var 
because of issue in block scope and functional scope
*/
