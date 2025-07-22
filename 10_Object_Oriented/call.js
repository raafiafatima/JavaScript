function setUserName(name){
    this.name = name
    console.log('called')
}
function createUser(name, email){
    setUserName.call(this, name) // call passes the current execution context to the other fn so that it sets the name in the current context and not in its context and move once the fn gets thrown out of the call stack
    this.email = email
}
const chai = new createUser('raafia', 'fatima@gmail.com')
console.log(chai)