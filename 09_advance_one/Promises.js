// Promises: eventual completion pr failure of a task
// many tasks need time to be complete, thats where we use promise such as cryptograpy, database etc
// three states : pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.
// previously fetch, catch, then were from a library Blue Bird and later got integrated in pure JS
// promise has 2 parts: creation and consumtion
const promise1 = new Promise(function (resolve, reject) {
  // Do async task such as DB calls, crypography, networkcall etc
  setTimeout(function () {
    console.log("async task complete");
    resolve(); // connects the promise to then
  }, 1000);
}); // takes in a callback
// hence the promise has been created, now we will consume it
promise1.then(function () {
  console.log("promise is consumed");
});
// another way without using consts

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyn 2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("asyn 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "chai", email: "chair@exp.com" }); // getting data inside resolve, this gets passed onto the then function
  }, 1000);
});
// then is connected to resolve
promise3.then(function (item) {
  console.log(item); // the item is the data that was passed into resolve
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "raafia", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// let userName = promise4.then((user) => {
//     console.log(user)
//     return user.name
// })
// console.log(userName)
// this doesnot work and causes error, thus to get data we can do chaining where we can use multiple then to perform different taks and get what the previous one returens

promise4
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(()=>{ // always executed 
    console.log('the promise is either resolved or rejected')
  });

//   can handle promises using asyn and await, not necessary to always use then and catch
const promise5 = new Promise(function(resolve, reject){
    setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
})

// async: waits for a while for the work to happen and then moves forward, if not done, give error, bad rep : cant seem to handle error directly, hence can cause mishaps when error arises, but useful for certain use cases 
// to resolve error handling isuuse, use try and catch block to handle the error from promises 

async function consumePromise5() {
    try {
        const response = await promise5 // promise is an object not function 
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromise5()

// try catch syntax 
// async function getAllUsers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data = await response.json() // the response takes time to convert into a json file thus we have to await this too
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }
// getAllUsers()

// then catch syntax 
// fetch returns a promise

fetch('https://jsonplaceholder.typicode.com/users/1')
.then((response)=>{
    return response.json()
}) // we dont have to wait because it moves to the next only when the previous work gets done 
.then((data)=>{
    console.log(data)
})
.catch((error)=>{ 
    console.log(error)
})

// Interview Question : if we get a 404 error from the response would it be in resolve or reject? 
// Ans: It would be in resolve because reject only works when the request was not completed or it encounters a network error and not an HTTP error, here the request was completed but the response was an error 


// fetch has a high priority queue called micro task queue that always gets executed first, thus thats why fetch gets executed first and we get data first then the next things 

// fetch can also get more data in the form of options 

