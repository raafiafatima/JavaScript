//Obects 
// can be declared as constructor (singleton - only one instance is created) or literal (dont declare as singleton)

// Object Constructor 
// Object.create() 

const sym = Symbol('key1')

// Object Literals 
const jsUser = {
    name : 'Raafia', 
    'full name' : 'Raafia Fatima', 
    [sym]: 'key1', 
    age: 21,
    location : 'Karachi', 
    email: 'Raafia@google.com', 
    isLoggedin : false, 
    lastLoggedIn : ['mon', 'sat'],
    greeting : function() {
        console.log('I am inside the obj')
    }
}
// BTS the keys are tracked as strings therefore 

// two ways to access the eles of the objs 

console.log(jsUser.email) // dot method 
console.log(jsUser['email']) // sqr brackets method - needed when key in the object is declared as a string, forexample - full name 

console.log(jsUser['full name'])

// we can declare symbols inside the obj too, with a sqr bracket on the key name and access them through the sqr method also, asked in interviews 

console.log(jsUser[sym])
console.log(Object.keys(jsUser)) // symbols are useful for adding properties that you dont want to be seen in the keys and also for keeping things unique 

// we could also freeze objects and dont allow chnages in them 
jsUser.age = 22
// Object.freeze(jsUser)
jsUser.age = 21

console.log(jsUser)

jsUser.greeting = function() {
    console.log('Hello user')
    console.log(`hello ${this["full name"]}`)
}

console.log(jsUser.greeting())
// remeber all the ways you can access an object 