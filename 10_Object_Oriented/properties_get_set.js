// how getter and setters worked before classes
function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(val){
            this._email = val
        },
        
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(val){
            this._password = val
        },
        
    })

}

const raafia = new User('xyz@gmail.com', '865dgf')
console.log(raafia.password) // comes in upper case 