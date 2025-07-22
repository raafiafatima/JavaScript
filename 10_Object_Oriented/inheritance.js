class User{
    constructor(name){
        this.name = name 
    }
    logMe(){
        console.log(`The name is ${this.name}`)
    }
}
// extend keyword does all the work of __proto__ and setPrototypeOf
class Teacher extends User{
    constructor(name, email, password){
        super(name) // this does all the work of taking the name into the constructor of the class we are inheriting from 
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.name}`)
    }
}

const chair = new Teacher('chair', 'email.com', '123')
chair.addCourse()
chair.logMe()

const table = new User('table')
table.logMe()

console.log(chair instanceof Teacher) // to check whether the object is an instance of some class, equality operators dont work normally 