// BMI Formula :  weight / (height/100)^2

console.log("Raafia");
// using form to get input fields

let form = document.querySelector("form");
console.log(form);
// In HTML, forms can use either the GET or POST method to send data to a server.

// thus we have to stop this default action through event handler

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stops the data from being submitted onto the server
  // select the values once they come into the form
  const height = parseInt(document.querySelector("#height").value); // gives the value inside the input in string
  const weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  if(height == '' || height < 0 || isNaN(height)){
    result.innerHTML = 'Please enter valid integer for height'
  } else if (weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = 'Please enter valid integer for weight'
  }
  else{
    let bmi = ( weight / Math.pow((height/100), 2)).toFixed(2)
    let msg 
    if(bmi < 18.6){
        msg = 'Under Weight'
    } else if (bmi >= 18.6 || bmi <= 24.9) {
        msg = 'Normal'
    } else{
        msg = 'Overweight'
    }
    result.innerHTML = `<span>${bmi}<span/><br>
    <span>Your BMI is in the ${msg} range.<span/>`
  }

});
