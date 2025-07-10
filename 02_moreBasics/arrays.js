// ARRAYS 

// arrays can hold multiple data types together and are resizeable 
// arrays have shllow copy meaning chnages in copies can cause chnages in original

const myArr = [3,5,7]
const copyShallow = myArr
const copyDeep = [...myArr] // because each value is copied and spread into a new array

copyShallow[0] = 2 
copyDeep[0] = 4
// console.log(copyShallow, myArr) //[ 2, 5, 7 ] [ 2, 5, 7 ]
// console.log(copyDeep, myArr)  // [ 4, 5, 7 ] [ 2, 5, 7 ]

const fruits = ['mango', 'apple', 'orange']

// Array Methods

fruits.push('pineapple')
// console.log(fruits)
// console.log(fruits.pop())

// unshift: used for adding an element at the start and shifting the rest 

fruits.unshift('banana')
// console.log(fruits)

// shift: removes the first ele 
fruits.shift()
// console.log(fruits)

// console.log(fruits.includes('banana'))
// console.log(fruits.indexOf('apple'))

// console.log(fruits.join(' - '))
// console.log( typeof fruits.join(' - '))

//slice and splice  
// slice: takes a slice from the original array but doesnot change the OG array
// console.log('A', fruits)
const newFruits = fruits.slice(0, 2)
// console.log(newFruits)
// console.log('B', fruits)

// splice : takes a slice and chnages the OG array by taking out the slice

const newFruits2 = fruits.splice(0, 2)
// console.log(newFruits2)
// console.log('C', fruits)


// +++++++++++++++++ MORE ABOUT ARRAYS +++++++++++++++++

const veg  = ['spanich', 'potato', 'tomato']

// In JavaScript, arrays are mutable, meaning that their contents can be changed without creating a new array. Methods like push, pop, shift, and splice can modify the array in place.

// console.log(veg);
// // veg.push(fruits)
// // console.log(veg) // pushes the fruits array as an object 
// console.log(veg.concat(fruits)) // merges them into a single array
// console.log(veg) // OG array is not changed

// spread operator 
// preferred in palace of concat 

const newfoodArr = [...veg, ...fruits]
// console.log(newfoodArr)

const numarr = [1,2,3, [4,5,6,[6,5,4]], 4, [7,8]]
console.log(numarr.flat(2)) // define depth or give infinity 

console.log(Array.isArray('Raafia'))
console.log(Array.from('Raafia'))
console.log(Array.from({name : 'Raafia'})) // interesting case 

console.log(Array.of(100,200,300))

