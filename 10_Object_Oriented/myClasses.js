//ES6 after work, mostly syntactical sugar

class User {
  // constructor - not necessary always
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  makeCapital() {
    return `${this.name.toUpperCase()}`;
  }
}

const chair = new User("chair", "chair@ikea.com", "123");
console.log(chair.encryptPassword());
console.log(chair.makeCapital());

// behind the scene
// how to work without class keyword

function Furniture(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

Furniture.prototype.encryptPassword = function(){
     return `${this.password}abc`;
}

Furniture.prototype.makeCapital = function(){
     return `${this.name.toUpperCase()}`;
}

const table = new Furniture('table', 'table@ikea.com', '432')
console.log(table.encryptPassword())
console.log(table.makeCapital())