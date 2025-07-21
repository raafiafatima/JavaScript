// JS says that object literal i just an object and is the most basic unit of your language
const user = {
  name: "raafia",
  loginCount: 8,
  signnedIn: true,
  getUser: () => {
    // console.log("get user details");
    return `Username ${this.name}`
  },
};
// key-value pair : properties
// key-function pair : methods

// this: for getting the current context 
// in node -> empty, in browser -> gets values such as window etc 

// now to make multiple users, instead of copying the code over and over again, we use constructors to make a sturcture and then call it to make the users 

// Constructor function : 

// const promiseOne = new Promise() // new -> used for making a new context and works as a constrcutor function 

function User(username, loggedIn){
    this.username = username 
    this.loggedIn = loggedIn 
    this.greetings = function () {
        console.log(`hello ${this.username}`)
    }
    // variable = parameter 
    return this // whole object 
    // return not much needed because it returns implicitly 
}

const user1 = new User('raafia', true)
const user2 = new User('ahsan', false)
// without using the new keyword it overrides the previous one, thus we need the new keyword to create a new instances
console.log(user1.constructor) // constructor property: reference about your own exsistance 
// console.log(user2)

// new -> 1: creates a new  empty object called instance
// 2: constructor function called due to new, 
// 3: injects into this 
// 4: returns all 

