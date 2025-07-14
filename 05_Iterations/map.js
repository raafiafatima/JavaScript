const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add 10 in each number
// map -> also returns by himself, if we use scope, we would have to use return keyword
const newNums = myNums.map((num) => num + 10);
// console.log(newNums)

// chaining method -> use multiple functions on top of one another, such as map().filter() etc

// map returns all after performing some function, while filter checks a condition and returns only those that follow the condition
const newNums2 = myNums
                        .map((num) => num * 10)
                        .map((num) => num + 1) // gets the number that is colected in the previous map 
                        .filter((num) => num > 40)

console.log(newNums2);
