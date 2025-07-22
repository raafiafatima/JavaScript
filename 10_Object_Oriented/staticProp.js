// prop = properties 

class User{
    constructor(name){
        this.name = name 
    }
    logMe(){
        console.log(`The name is ${this.name}`)
    }
    // you want the inherited class and the original class to not have this method  
    static creatId(){
        return `123`
    }
}

class Teacher extends User{
    constructor(name, email){
        super(name)
        this.email = email
    }
}
const raafia = new User('raafia')
// console.log(raafia.creatId())

const iphone = new Teacher('iphone', 'i@phone.com')
iphone.logMe()
console.log(iphone.creatId())
