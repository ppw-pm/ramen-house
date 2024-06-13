// Toggle the menu visibility
function toggleMenu() {
  var menuElement = document.querySelector(".menu");
  menuElement.classList.toggle("is-visible");
}

// Add a listener to the button to toggle menu visibility on click
var menuToggleElement = document.querySelector(".menu-toggle");
menuToggleElement.addEventListener("click", toggleMenu);


// display content based on which button is pressed
function displayBtnContent(btn) {
  if (btn === null) {
    return;  
  }
  // make the currently highligted button active
  var currentActiveBtn = document.getElementsByClassName("reserve-button active")[0];
  currentActiveBtn.className = "reserve-button"
  btn.className = "reserve-button active"

  // Clear content based on which button is clicked
  var clearButtonName = ""
  if (btn.name === "dining") {
      // If the current button that was clicked is 'dining', clear content from 'ramen'
      clearButtonName = "ramen";
  } else {
      clearButtonName = "dining";
  }

  // set the detail content that is not selected to not display
  var clearClass = document.querySelector(".reserve-details-" + clearButtonName);
  clearClass.style.display = "none";

  // show detail of content that button has been clicked
  var showClass = document.querySelector(".reserve-details-" + btn.name);
  showClass.style.display = "flex"; 
  showClass.style.alignItems = "center"; 
  showClass.style.justifyContent = "center";
}


