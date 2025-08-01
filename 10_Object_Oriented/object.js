function multiply(num){
    return num * 5 
}
multiply.power = 2 
console.log(multiply(5))
console.log(multiply.power)
console.log(multiply.prototype) // by default context set huta ha that is the context of the function/method 


// the purpose of doing all this is to understand how the prototypial inheritance works 
function createUser(name, score){
    this.name = name  // this sets the current context 
    this.score = score
}

createUser.prototype.increment = function () {
    return this.score += 1       
}

createUser.prototype.printMe = function(){
    console.log(`Hi there, ${this.name}`)
}

// the new keyword is necessary for making a new instance of an object, thn passing the newly made functions into the prototype, so that they can be called upon, if the new keyword is not used, the created users such as tea and chai donot know what functions we have injected and what they do 
const chai = new createUser('raafia', 20)
const tea = new createUser('fatima', 23)
console.log(chai.increment())
chai.printMe()
tea.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/