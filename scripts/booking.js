/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var numDaySelected = 0;
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var full = document.getElementById("full");
var half = document.getElementById("half");
var clear = document.getElementById("clear-button");
var calculatedCost = document.getElementById("calculated-cost");
var totalCost=0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.addEventListener("click", function() {
    if (!monday.classList.contains("clicked")) {
        numDaySelected++;
    }
    monday.classList.toggle("clicked");
    recalculate();
});

tuesday.addEventListener("click", function() {
    if (!tuesday.classList.contains("clicked")) {
        numDaySelected++;
    }
    tuesday.classList.toggle("clicked");
    recalculate();
});

wednesday.addEventListener("click", function() {
    if (!wednesday.classList.contains("clicked")) {
        numDaySelected++;
    }
    wednesday.classList.toggle("clicked");
    recalculate();
});

thursday.addEventListener("click", function() {
    if (!thursday.classList.contains("clicked")) {
        numDaySelected++;
    }
    thursday.classList.toggle("clicked");
    recalculate();
});

friday.addEventListener("click", function() {
    if (!friday.classList.contains("clicked")) {
        numDaySelected++;
    }
    friday.classList.toggle("clicked");
    recalculate();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


clear.addEventListener("click", function() {
    // Remove the "clicked" class from all days
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");

    // Reset other relevant variables
    numDaySelected= 0;

    recalculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", function(){
    if (!half.classList.contains("clicked")){
        costPerDay = 20;
        half.classList.toggle("clicked");
        full.classList.remove("clicked");
        recalculate();
    }
    
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.addEventListener("click", function(){
    if (!full.classList.contains("clicked")){
        costPerDay = 35;
        full.classList.toggle("clicked");
        half.classList.remove("clicked");
        recalculate();
    }
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    totalCost = (costPerDay * numDaySelected);
    if (half.classList.contains("clicked")){
        totalCost = totalCost / 2;
    }
    calculatedCost.innerHTML = totalCost;
}

