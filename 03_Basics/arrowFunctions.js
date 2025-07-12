// this keyword and Arrow Function
const user = {
  username: "Raafia",
  email: "raafia@google.com",
  welcomeMessage: function () {
    console.log(`${this.username} just logged in.`);
    console.log(this);
  },
};
// using the this operator to define the current context

// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()

// console.log(this) // empty - b/c we are in the node env
// if we use this in the browser, we would see that this returns window because the most global context is Windows.

function chai() {
  // console.log(this) // gives a bunch of values tha define the global object of the function

  let name = "Raafia";
  // console.log(this.name) // gives undefined meaning because the global object has no property called name
}
chai();

// becaus of this even in arrow functions, this is not used

// removed the function keyword only
// basic method
// const add = (num1, num2) => {
//     return num1  + num2
// }

// another method (implicit, dont need the return key)
// const add = (num1, num2) => num1+num2

// parentheses with no return keyword
// const add = (num1, num2) => (num1 + num2);
// console.log(add(1, 2));

// to return an object 
const obj = () => ({username : 'raafia'})
console.log(obj())
