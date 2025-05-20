/*
Officially 2 categorization:
Primitive
Non primitive or reference type
*/


//****  Primitive******
// Are call by value, i.e. original value's copy is given, no reference is given in memory
// 7 types: String, Number, Boolean, null(mean empty), undefined(variable declared but no value given, can manually set undefined too), Symbol(to make value unique), BigInt

//JavaScript is dynamically typed. This means the type of a variable is determined at runtime based on the value it holds, not at compile time.
const score = 100
// const score:number = 100 In typescript
const scoreValue = 100.3 //Number category, no special float or decimal type
const isLoggedIn = false
const outsideTemp = null //Value isn't zero, it's empty
let userEmail;
let userEmail2 = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) //false

const bigNumber = 26256351290434234234735614065981094n

// ******Reference (Non primitive)******
// Can allocate reference directly in memory
// Array, Objects, Functions 

const heroes = ["shaktiman", "naagraj", "doga"]
//Object stored in variable. Object is {...}
let myObje = {
                name: "bhaskar", 
                age: 22
             }

//Function stored in variable
const myFunction = function() {
    // console.log("Hello World");
}


// console.log(typeof myFunction) //Return function, actually called object fucntion
//Link: https://262.ecma-international.org/5.1/#sec-11.4.3 


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory: 2 types: Stack (Primitive) and Heap (Non-Primitive)
//Defined in Stack - Copy of declared varaible gotten
//Defined in Heap - Reference(original value) gotten 

let myYoutubename = "bhaskarkcdotcom"

let anothername = myYoutubename
anothername = 'kcbhaskar'
console.log(myYoutubename)
console.log(anothername)

let user1 = {
    email: "user@goolge.com",
    upi: "user@bl"
}

let user2 = user1
user2.email = "hitesh@google.com"

console.log(user1.email)
console.log(user2.email)