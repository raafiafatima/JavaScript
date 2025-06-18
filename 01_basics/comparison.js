// allows for comparison betwen different datatypes 
console.log("1" > 2)
console.log(2 > "2")
// the compariosn operator chnages the null to zero while the equality operator doesnt 
console.log(null >= 0)
console.log(null == 0) // avoid such conversions 

// === : strict check (also checks data and no conversion)