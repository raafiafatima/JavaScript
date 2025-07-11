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
// remember all the ways you can access an object 

// +++++++++++++++++++ OBJECTS PART 2 +++++++++++++++++++++

// object constructor - singleton

const tinderUser = new Object()

console.log(tinderUser)

tinderUser.id = '123'
tinderUser.name = 'Manny'
tinderUser.isLoggedin = false 

// console.log(tinderUser)

// nested objects 
const nestedObj = {
    fullname : {
        first : 'Raafia', 
        second : 'Fatima',
    } , 
    email: 'raafia@google.com'
}
// console.log(nestedObj.fullname.second) // can access value with dot method 

// merging objs 

const obj1 = {
    1: 'a', 2 : 'b'
}
const obj2 = {
    3: 'c', 2: 'd'
}
const obj4 = {
    2: 'z'
}
// The properties are overwritten by other objects that have the same properties later in the parameters order.

// Object.assign(target, source) the target is the object that is returned after it is modified 

const obj3 = Object.assign({}, obj1, obj2, obj4) // here we have taken the target as an empty object because taking obj1 as a target would modify it for the future . 
// console.log(obj3)

// mostly we use the spread operator 
const obj5 = {...obj1, ...obj2} 

// storing keys and values in arrays and then utilizing them to get data 
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

// storing each key-value pair into an array and returning all that pairs in an array

console.log(Object.entries(tinderUser))

// to determine whether the object contains a property or not 

console.log(tinderUser.hasOwnProperty("isLoggedin"))
