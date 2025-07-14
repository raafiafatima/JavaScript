const coding = ["js", "ruby", "java", "python"];

// give a callback function - it has no name, what name to give for each value
coding.forEach(function (item) {
  // console.log(item)
});

// with arrow function
coding.forEach((item) => {
  // console.log(item)
});

function printMe(item) {
  //    console.log(item)
}

coding.forEach(printMe); // only give reference of the function and dont execute it

// for each gives access to item, index and the full arr inside the function
coding.forEach((item, index, arr) => {
//   console.log(item, arr, index);
});

// array having objects
const myCoding = [
  { langName: "java", file: "java" },
  { langName: "python", file: "py" },
  { langName: "javascript", file: "js" },
];

myCoding.forEach((item, index) => {
    // console.log(item.langName) // for taking each value
    console.log(item, index)
})
