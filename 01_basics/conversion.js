// type conversions

let score = 33; 
let string_score = "33ac";

console.log(typeof score); // number
console.log(typeof string_score); // string

// bug/issue of javascript : would convert a non number into a number meaning it lacks strict checking, this causing the number 33ab to be converted into number data type but would result in NaN (not a number)
let num_score = Number(string_score);

console.log(typeof num_score);
console.log(num_score); // NaN because not a valid number // null ad false give 1, undefined and string will give NaN 

// 1 = true, 0 = false : when we convert into Boolean 
// '' = false, 'hello' = true 

let a = null 
let b = String(a)
console.log(b)
console.log(typeof b)

// *********************Operations*****************

console.log('Operations output\n')
console.log("1" + 2+ 2)
console.log(1+ '2' + 2)

console.log(+true) // 1 b/c we have converted 

