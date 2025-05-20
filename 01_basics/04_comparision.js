//  console.log(2 > 1)
//  console.log(2 >= 1)
//  console.log(2 < 1)
//  console.log(2 == 1)
//  console.log(2 != 1)

// console.log("2" > 1)
// console.log("02" > 1)
// console.log("02" > 1)


// Avoid these:
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); //true in result, not predictable result
//equality check == and comparisions > < >= <= work differently. Also == and === work differently
//Comparisions convert null to a number, treating it a 0


//Avoid these
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

//Strict check. Use ===
// The string is always converted to number when comparing a string and a number using ==
console.log("2" == 2) // Here conversion happen, "2" is converted to 2
console.log(2 == "2")// Here "2" is converted to 2

console.log("2" === 2)



