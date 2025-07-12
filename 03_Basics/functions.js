//functions

function MyName() {
  console.log("Hi, my name is Raafia");
}

//  function name = reference, () = execution
// MyName()

// function addTwoNumbers(num1, num2) { // parameters
//     console.log(num1 + num2)
// }
function addTwoNumbers(num1, num2) {
  // parameters
  return num1 + num2;
}

addTwoNumbers(3, 4); // arguments
// doesnot work if the user enters wrong input such as strings, null etc

const result = addTwoNumbers(3, 4);
// console.log(result) // could result in undefined if we dont return anything in the function

function loginUserMsg(username = "User") {
  // adding logic to handle no input condition

  if (username === undefined) {
    return "Please enter username";
    // so that the next statements dont get executed
  }
  return `${username} just logged in`;
}

console.log(loginUserMsg('Raafia'))
console.log(loginUserMsg()) // gives undefined and not null

// when you dont know how many arguments you could get such as a function to calculate cart price wont know how many items can come into the cart
// for this we use the rest operator (...) that bundles the arguments into an array, then you can iterate over it and get data

function calculateCartPrice(...nums) {
  return nums;
}
console.log(calculateCartPrice(200, 300, 400, 500));

// to show some items into variables and the rest into an array
function show2items(val1, val2, ...vals) {
  return `${val1}, ${val2} and more items are in the shopping cart, such as ${vals}`;
}
console.log(show2items("apple", "biscuit", "powder", "lotion", "butter"));

// functions and objects 

const user = {
    username : 'Raafia', 
    price  : 199
}

function handleObject(anyObj) {
    return `username is ${anyObj.username} and price is ${anyObj.price}`
}
console.log(handleObject(user)) // this would arise problems when the key names dont match 

const myArr = [100, 200, 300]

function returnVal(arr){
    return(arr[1])
}
console.log(returnVal(myArr))