//Scopes 

// {} => scope of if-else and function , whatever is defined inside the scope wont be seen/accessed outside it 
// var has no concept of block scope thus it is not used 
// let and const follow block scope rules 

if(true){
    let a = 10
    const b = 30
    // var c = 40 // or c = 40
}

// console.log(a)
// console.log(b)
// console.log(c)

// values declared outside the local scope can be accessed inside the local scope but not vice versa

// nested scopes and closures 

function one(){
    const username = 'Raafia'

    function two(){
        const website = 'Youtube'
        console.log(username)
    }
    // console.log(website) // causes error because the website is inside the local scope and cant be accessed 
    two()
}
// one()

// closure: do in the next video 

if(true){
    const name = 'Raafia'
    if(name === 'Raafia'){
        const website = ' youtube'
        console.log(name + website)
    }

    // console.log(website)
}
// console.log(name)

//************ INTERESTING **************/
// there are two ways to create a function, one is to make it as a normal declaration, while in the other we hold the function in a variable 


// in this way the function can be called even before it has been declared
console.log(addOne(3))
function addOne(num){
    return num+1
}

// this method can only access the function after it has been declared. otherwise it would give an error 
const addTwo = function(num){
    return num+2
}

console.log(addTwo(3))


