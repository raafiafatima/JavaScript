// do while and while loop 

let index = 0
while (index <= 10) {
   // console.log(`value of index is ${index}`)
    index = index + 2
}

let myarr = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myarr.length) {
    // console.log(`value is ${myarr[arr]}`)
    arr =  arr + 1
}

// do while loop => first work then check the condition, useful in cases when we need one print and then check the condition 

let score = 11 
do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);