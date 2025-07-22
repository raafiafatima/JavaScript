// can make iterable objects non iterable by chnaging some of their hidden properties, in order to show some properties, we use the following function

console.log(Math.PI);
let desc = Object.getOwnPropertyDescriptor(Math, "PI"); // module and the property whos descrition you want
desc.writable = true;
desc.value = 4;
console.log(desc.writable);
console.log(desc);

// it may seem like its chnaging but its only done locally, however we can create objs that can have such properties pre defined

// const newObj = Object.create(null)
const chai = {
  name: "ginger",
  price: 250,
  isAvailable: true,
  chaiOrder: function () {
    console.log("chai ready");
  },
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name")); // got the name and now we can define the properties

Object.defineProperty(chai, 'name', {
    enumerable: false
    // now it wont allow the name to be iterated over 
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`key ${key}, val ${value}`); // to ensure that we dont get a function
  }
}
