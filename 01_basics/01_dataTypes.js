// operations: after data conversions

// adding or subtracting numbers or strings

"use strict"; // treat all JS code with newer standard

//alert(3 + 3); // wont run because we are not in browser, we are in node.js
// tc39.es: standard docs for js
let num = 3;
let neg = -num;
console.log(neg);
console.log("nothing");

// types of data tyoes
// number, bigint, string, boolean, null (representation of empty value), undefined (a value is not defined), sumbol (used to define uniquness)
// null = tyoe of : object
// undefined : tyoe of: undefined

/***********************Data types for interviews**************************/
//datatypes are calssified into two types based on how they are stored in the memory : primitive and non primitive
// Primitive data types: called by val meaning a copy of data is passed not the original data in the memory
// types: string, boolean, number , null, undefined, symbol , Bigint

// non-primitive or reference type : called by reference (actual value given) , types: Array, Objects, Functions

//JS is typed dynamically

// symbol syntax:
const id = Symbol("123");
const aid = Symbol("123");

console.log(id == aid) // false b.c they are unique due to sumbol 

/************************************MEMORY******************************************/

// stack memory : used for primitive types, always gives a copy of data
// heap memory : used for non primitive type , always gives the original data 

let user = "raafia"
let anotheruser = user 
anotheruser = "hafsa"

console.log(user)
console.log(anotheruser)

let account = { name: "raafia", email: "raafia@gamil.com"}
let anotherAccount = account
account.name = "hafsa" // permenantly changed b/c passed by ref 

console.log(account)
console.log(anotherAccount)