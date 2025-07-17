console.log("Raafia");

let allButton = document.querySelectorAll(".button"); // Node List
let body = document.body;

// there are many events happening on the dom thus, we use addeventlistener to listen to te even that we want, and then we add the type of even that we need such as click, reload, refresh etc, and we also write a function to show what to be done once we get the event
// the e is the event that is passed from the event listenenr
allButton.forEach((item) => {
//   console.log(item);
  item.addEventListener("click", function (e) {
    // console.log(e); // the whole event -> a very big object
    // console.log(e.target); // the object that has been clicked

    let buttonId = e.target.id;

    if (buttonId === "grey") {
      body.style.backgroundColor = "grey";
    } else if (buttonId === "white") {
      body.style.backgroundColor = "white";
    } else if (buttonId === "blue") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "yellow";
    }
  });
});
