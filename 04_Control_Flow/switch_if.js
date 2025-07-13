// if 

const isUserLoggedIn = true 
const temp  = 41 

// if(temp < 50){
//     console.log('temp less than 50')
// }
// else{
//     console.log('temp greater than 50')
// }

// comparison operators: < > <= >= == != ===(also checks types) !== (not equal strict check)

// const score = 200 

// if(score > 100){
//     const power = 'fly'
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`) // causes error 

// one line code: 
// const balance = 100 
// if(balance > 20) console.log('test'), console.log ('test2');  // here the scope is only for single line, could be fdouble, but you need to add comma 
// NOT RECOMMENDED

// and and or logical operators 

// SWITCH 
    // syntax 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3 
switch (month) { // key -> the value to check every time
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('Feb')
        break;
    case 3:
        console.log('March')
        break;
    case 4: 
        console.log('April')
        break;
    default:
        console.log('default case match')
        break;
}

// except default it executes all the switch cases when we remove break 
// could also compare strings and other boolean types just add them to the keys  


