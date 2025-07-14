// reduce method
// used in payment method to get the total 

const nums = [1, 2, 3];
let initialVal = 0
let toatl = nums.reduce((accumulator, currentVal) => accumulator + currentVal, initialVal )
// console.log(toatl)

// the accumulator add the elements of the array and sums them, it need to know what the initial value is thus it takes an initail val 

// array.reduce(callback, initialValue);

let newNums = nums.reduce(function (acc, currVal) {
    // console.log(`acc: ${acc}, currVal : ${currVal}`)
    return acc + currVal
}, 0) // place the initial value here , if no value placed here it takes the first number of the array as the initial value, we add 0 to make code safer for edge cases such as empty arrays, 
// if the array remains empty it throws an error 
// console.log(newNums)

let myTotal = nums.reduce((acc, currVal) => acc+currVal, 0)

console.log(myTotal)

const cart = [
    { itemName: 'Laptop', price: 1000 },
    { itemName: 'Phone', price: 800 },
    { itemName: 'Headphones', price: 200 },
    { itemName: 'Monitor', price: 300 },
    { itemName: 'Keyboard', price: 100 }
];

const cartTotal = cart.reduce((acc, currVal) => acc+currVal.price, 0)
console.log(cartTotal)

