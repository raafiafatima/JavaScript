//Immediately Invoked Functions Expression IIFE

// SYNTAX: ()() -  the first bracket is for the function, while the second just executes the function immediately
// USAGE: - to immediately invoke the function - to get rid of problems such as global pollution 

(function chai () {
    // named IIFE 
    console.log('DB CONNECTED')
})(); // necessary to add this semicolon because Node doesnot know where to stop the context, thus semicolon needed 

((name) => {
    // un-named IIFE 
    console.log(`I am here ${name}`)
})('Raafia') ;// pass parameter 

