let randomNumber = Math.round(Math.random() * (100 - 0 + 1));
console.log(randomNumber);

const submit = document.querySelector("#subt"); //submit button
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    if (validateGuess(guess)) {
      numGuess++;
      prevGuess.push(guess);
      console.log(prevGuess);
      checkGuess(guess);
    } else {
      alert("Please enter a valid number");
    }
  });
}

function validateGuess(num) {
  if (num >= 1 && num <= 100) {
    return true;
  } else {
    return false;
  }
}

function checkGuess(num) {
  // check if guess is equal to random number
  if (num === randomNumber) {
    displayMessage("Congrats! You have guessed the correct number.");
    newGame();
  } else if (num > randomNumber) {
    displayMessage("Guess Low");
    displayGuess();
  } else {
    displayMessage("Guess High");
    displayGuess();
  }
}
function displayGuess() {
  // values clean, and update guess array
  userInput.value = ''
  guessSlot.innerHTML = `${prevGuess}`;
  if (numGuess === 11) {
    endGame();
  } else {
    remaining.innerHTML = `${10 - numGuess}`;
  }
}

function displayMessage(message) {
  // DOM Manipulation
  lowOrHi.innerHTML = `<span>${message}<span/>`;
}

function newGame() {
  
  playGame = true;
  randomNumber = parseInt(Math.random() * 100 + 1);
  console.log(randomNumber) // generating a new random number
  prevGuess = [];
  numGuess = 0;
  guessSlot.innerHTML = "";
  remaining.innerHTML = "10";
  userInput.removeAttribute("disabled");
  userInput.value = "";
}

function endGame() {
  playGame = false;
  alert("The Game has ended, reload the page");
}
