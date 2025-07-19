// MY LOGIC 
// let color = ['green', 'yellow', 'pink', 'blue', 'orange', 'grey']

// const changeColor = function () {
//     let randomNumber = Math.round((Math.random()) * (5 - 0 + 1))
//     document.querySelector('body').style.backgroundColor = color[randomNumber]
// }

// BETTER LOGIC 🫡
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor((Math.random()) * (15 - 0 + 1))
        color += hex[randomNum]
    }
    console.log(color)
    document.querySelector('body').style.backgroundColor = color
}
let changeInterval 

document.getElementById('start').addEventListener('click', function(){
    changeInterval = setInterval(randomColor, 1000)
})
document.getElementById('stop').addEventListener('click', function(){
    clearInterval(changeInterval)
    changeInterval = null 
})