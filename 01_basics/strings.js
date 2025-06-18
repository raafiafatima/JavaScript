//string interpolation : adding variabes inside strings 


let user = 'raafia'
let repo = 9 

console.log(`hello my name is ${user} and i have ${repo} repos`)

let gameName = "skudo-game-for-all"
let userName = new String('hafsa') // stores the name as object

console.log(gameName[0])
console.log(userName[0])

console.log(typeof gameName)
console.log(typeof userName)

console.log(userName.__proto__) // shows the object, you wont be able to see it in terminal, go to console in browser 

console.log(userName.toUpperCase())
console.log(userName.charAt(2))
console.log(gameName.toUpperCase())

// sub string, slice, trim and replace 
// trim start, trim end 
const greetings = '       hello       '
console.log(greetings)
console.log(greetings.trim())

const url = "htps://raafia.com/raafia%20fatima"
const newurl = url.replace('%20', '-')
console.log(url)
console.log(newurl)

console.log(url.includes('hafsa'))
console.log(url.includes('raafia'))

let words = gameName.split('-')
let wordsLimit = gameName.split('-', 2) // with limit of how many words to take 

console.log(words)
console.log(wordsLimit)

