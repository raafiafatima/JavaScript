console.log("Raafia");

let clock = document.getElementById("clock");
console.log(clock);

// set interval method takes a function and a time interval showing that when shuld they repeat callling the function after a certain delay
setInterval(function () {
  let time = new Date();
  clock.innerHTML = time.toLocaleTimeString();
}, 1000); // 1000 milisecond = 1 second
