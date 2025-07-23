const User = {
  _email: "r@abc.com",
  _password: "765dfg",

  get email_val() {
    return this._email.toUpperCase();
  },

  set email_val(val) {
    this._email = val;
  },
};

const tea = Object.create(User);
console.log(tea.email_val);

// the get and set keyword override the original property inside the object or class and act as a property rather than a function, thus the name of the get and set becomes the name of the property and we can access the correct value through that 
// the set and get becomes properties with no knowledge of the original val 