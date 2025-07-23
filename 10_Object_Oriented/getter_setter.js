class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  //   getter and setter for allowing the original data to be encapsulated. mostly used when we want to show a different value than the one we gave

  get password() {
    // allows us to return anything, for example used when we dont wanna show the password directly
    return `${this._password}RAF`;
  }

  set password(value) {
    this._password = value; // sets the value into password
    // we take different variables names because if we take same, both the constructor and getter and setter keep asking for the same password and cause the call stack to over-flow
  }

  // making getter and setters for email
  // getters always get return and no return in setters

  get email() {
    return `${this._email.toUpperCase()}@cloud`;
  }

  set email(val) {
    this._email = val;
  }
}

const user = new User("raafia@google.com", "abc321");
console.log(user.password);
console.log(user.email);
