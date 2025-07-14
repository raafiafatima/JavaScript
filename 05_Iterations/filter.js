const coding = ["js", "ruby", "java", "python"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});
// console.log(values); // undefined
// the foreach does not return any thing thus if we want to apply any operator and then return it, we shall use something else

// to get values back, you should use filter, as it gives back values
// filter -> takes item and a condition, and returns those that full fill this condition

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const val = myNums.filter((num) => num > 5); // single line, without curly brackets
const val2 = myNums.filter((num) => {
  // return num
  return num < 4;
}); // multi line with return statement to give back the values, because with curly brackets a scope has been defined and needs a return keyword
// console.log(val, val2)

// if we still want to use foreach to do the work
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums)

// More filters functions
// using filter to help the user search 
const books = [
  {
    title: "The Great Gatsby",
    genre: "Novel",
    publish: 1925,
    edition: 1,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Novel",
    publish: 1951,
    edition: 1,
  },
  {
    title: "The 7 Habits of Highly Effective People",
    genre: "Self-Help",
    publish: 1989,
    edition: 1,
  },
  { title: "The Alchemist", genre: "Novel", publish: 1988, edition: 1 },
  {
    title: "The 4-Hour Work Week",
    genre: "Self-Help",
    publish: 2007,
    edition: 1,
  },
];

let userBooks = books.filter((bk) => bk.genre === 'Self-Help')
userBooks = books.filter((bk) => {
    return (bk.publish >= 1920 && bk.genre === 'Novel')
} )
console.log(userBooks)

// maps -> in reduce.js file 

// add 10 to muNums using foreach 
let add10 = []
myNums.forEach((num) => {
    add10.push(num + 10)
})
console.log(add10)