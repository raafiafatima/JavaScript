//numbers and maths

let num = 2000;
let balance = new Number(100.01);

console.log(num, balance);

console.log(balance.toFixed(3)); // adds specified number of decimal after the number

const hundred = 1000000;
console.log(hundred.toLocaleString("en-IN")); // converts the number into a string with comma seperated

// +++++++++++++++++++++MATHS++++++++++++++++++++++

// common maths functions

console.log(Math.abs(-4)); // for getting absolute values
console.log(Math.round(4.6)); // for  rounding off
console.log(Math.ceil(4.8)); // takes the upper value
console.log(Math.floor(4.8)); // takes the lower value

// function for reducing number to the specified number of decimal digits
// returns number rather than string as in toFixed()

function roundToPlaces(number, places) {
  const factor = Math.pow(10, places); // this is the factor that helps scale the number,
  // example two places 10^2 = 100

  num = Math.round(number * factor) / factor;
  // 3.14159 * 100 = 314.159
  // roundoff(314.159) = 314
  // 314/100 = 3.14
  // hence it gets reduced to 2 decimal places

  return num;
}

console.log(roundToPlaces(3.14156, 2));

// random() => a method to get randomized numbers
// always returns number between 0 and 1, we use techniques to get between a range

console.log(Math.random());
console.log(Math.random() * 10 + 1); // multiplying by 10 gives number in 0, 1, 2 etc and adding 1 ensures we dont get 0
// rounding it will give us single integer

console.log(Math.round(Math.random() * 10 + 1));

// to get numbers between a specified range: general formula

function getRandomNumber(max, min) {
  num = Math.round(Math.random() * (max - min + 1) + min); // adding min to get the number in the range
  return num;
}

console.log(getRandomNumber(100, 200));

// ------------------------ RANDOM NUMBER GAME ---------------------
// a game where you can guess the random number

const prompt = require("prompt-sync")();

console.log("WELCOME TO THE GUESSING GAME \n");

let secretNumber = getRandomNumber(1, 10);

let run = true;
while (run) {
  let guess = Number(prompt("Guess any number between 1 and 10 : "));
  if (guess == secretNumber) {
    console.log("Congrats the guess was right");
    run = false;
  } else if (guess > secretNumber) {
    console.log("Hint: Guess a lower number");
  } else {
    console.log("Hint: Guess a higher number");
  }
}
