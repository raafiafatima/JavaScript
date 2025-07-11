// JSON Objects

// destructing of objects
const user = {
  name: "Raafia",
  age: 21,
  email: "raafia@google.com",
};

// we could access the value throught dot or bracket method, but that is not always easy to do, thus we can destructure the value into a variable

const { name: username, age: userage, email: useremail } = user; // here i have used curly brackets to destructre the user ong, arrays can also be destructed in a similar way
const { name } = user;

console.log(`Hello ${username} of age ${userage} with email ${useremail}`);

// similarly in functions we alsouse destructuring rather than calling props every time

// const navbar = ({company}) => { // destructuring in the props
// }
// navbar(company = "hitest")

//++++++++++++++ API +++++++++++++++

// the data that comes could be in from of JSON that can either be an object or arrays 

// use JASON Formattor to format the data into understandable data 