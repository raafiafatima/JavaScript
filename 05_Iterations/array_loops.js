// many times we need to iterate over arrays, for that we have soecial loops and functions for easier iterations over arrays

// array specific loops
// for of

// ['', '', ''] // arrays simple
// [{}, {}, {}] // array of objects

// for (const element of object) {
// } 
// element => iterator, object => any iterable object 
// does all iterations and doesnot needs to be incremented

const arr = [1, 2, 3, 4];
for (const element of arr) {
    // console.log(element)
}

const greetings = 'hello world'
for (const greet of greetings) {
    if(greet == ' '){
        continue
    }
    // console.log(`Each char is ${greet}`)
}

// Maps 
const map = new Map()
map.set('PAK', 'Pakistan')
map.set('IN', 'India')
map.set('UK', 'United Kingdom')

// console.log(map)

for (const element of map) {
    // console.log(element)
} // this gives key - value pair in form of arrays

// to get key and value seperately, we can destructure it 

for (const [key, val] of map) {
    // console.log(`The key is ${key} ad the val is ${val}`)
}

// for-of is used for Maps , arrays, strings but wont work on objects because they are not iterable like that
// can itrate over them using for-in  


