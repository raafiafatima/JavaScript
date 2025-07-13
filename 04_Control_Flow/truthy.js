// truhy, and falsy values are basic strings, arrays and other datatypes that can be checked without actually making/ checking any conditions.

// example
const useremail = "r@raafia.ai";
if (useremail) {
  console.log("Got user email");
} else {
  console.log("no user email");
}

// here we havent checked any condition still the output is correct
// some common truthy values
// falsy values: false, 0, -0, 0n(bigint zero), null, NaN, undefined, ''(empty string)
// the rest are truthy values, some unique are :
// '0', 'false', " ", [], {}, function(){} (empty function, object and array are all truthy vales)

let arr = [];
if (arr.length > 0) {
  console.log("not empty");
}

let obj = {};
if (Object.keys(obj).length > 0) {
  // get an array of keys
  console.log("not empty");
}

// false == 0, false == "", 0 == "" => all give true

//  nullish coalescing operator (??)
// an operator that allows you to check whether a value is undefined or null, and place a different value in its place, this is different from the || (or) operator, as or can also not allow other falsy values such as 0, '', or false
let age = null;
let userAge = age ?? 18;
console.log(userAge);

let val1 = 5 ?? 10; // gives 5
let val2 = null ?? 3; // gives 3 b/c we dont need null
let val3 = null ?? 10 ?? 20; // gives the first value that it finds, usually used when making database connections, we dont need null values b/c they can cause errors 
// usually we would see functions rather than actual value 

console.log(val1, val2, val3)

// Terniary Operator (?) different from ?? b/c ?? always compares and discards null 

// condition ? true : false 
let pop = true 
pop ? console.log('popped') : console.log('not popped')
