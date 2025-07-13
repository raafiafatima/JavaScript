//LOOPS
// for loop

for (let index = 0; index < 10; index++) {
  const element = index;
  console.log(element);
}
// ctrl+d to move cursor to all duplicated words
// flow: the index starts from 0, after all the execution completes it goes to the end and increments and the starts again

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop : ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`inner loop : ${j} and outer loop ${i}`);
//     console.log(i + '*' + j + '=' + i*j)
//   }
// }

// break and continue keywords

for (let index = 0; index < 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    // break; // stops the loop 
    continue // jumps to next value 
  }
  console.log("value of i is", index);
}
