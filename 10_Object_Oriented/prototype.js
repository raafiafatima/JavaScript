// 1) we can add methods and properties into an object and they will be passed onto all other data types such as strings, functions and arrays,because they all inherit from the prototype of an object 
// 2) if we add a method to string or array only, they will not be passed onto other objects, because they can be passed up, but can be passed down. 
// 3) we can pass the methods and properties from one object into another using __proto__ method of objects, however the modern syntax states to use a newer method called setPrototypeOf 

// 1) 

let myArr = ['apple', 'banana', 'mango']
let myObj = {
    name: 'raafia', 
    email: 'raafia@google.com', 
    greetings : function () {
        console.log(`hello ${this.name}`) // this defines the current context so that the correct value is passed
    }
}
let myString = 'RaafiaFatima   '

// injecting a method into object using prototype property 
Object.prototype.magic = function(){
    console.log(`This is the magic of prototypes`)
}

myArr.magic() 
myObj.magic()
myString.magic()

// 2) 

Array.prototype.onlyForArray = function(){
    console.log('this is only for array, wont work on anything else')
}

myArr.onlyForArray() 
// myObj.onlyForArray() // causes errors 
// myString.onlyForArray()

// 3) Inheritance 

// making 4 objs and passing their values to one another 

const User = {
    name : 'chai', 
    email : 'chai@gmail.com'
}

const Teacher = {
    makeVideo : true
}

const TecherSupport = {
    isAvailable: false
}

const TA = {
    makeAssignment: 'JS',
    __proto__: TecherSupport // traditional way of passing inside an object
} 

// Teacher.__proto__ = User
// let username = Teacher.name
// console.log(username)

// modern syntax for inheritance 

Object.setPrototypeOf(User, Teacher)
let make = User.makeVideo
console.log(make)


String.prototype.trueLength = function(){
    console.log(`The true length is ${this.trim().length}`)
}

myString.trueLength()
'myLove     '.trueLength()