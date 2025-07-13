// loops for objects
const myobj = {
  name: "raafia",
  email: "raafia@gmail.com",
  age: 21,
};

for (const key in myobj) {
//   console.log(key); // gives only names of keys 
//   console.log(myobj[key]) // gives value for key 

}

let langs = ['js', 'py', 'cpp']
for (const key in langs) {
    // console.log(key) // gives only index 
    // console.log(langs[key])
}

// for of directly takes the value, but for in takes index/keys in the object 

const map = new Map() // not iterable 
map.set('PAK', 'Pakistan')
map.set('IN', 'India')
map.set('UK', 'United Kingdom')

for (const key in map) {
    console.log(key)
}
