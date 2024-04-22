// Name: Simranjit Kaur Gill
/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var rate_per_day = 35;
var selectedDays = 0;

// creating an array for "business days"
var working_days = [document.getElementById("monday"), document.getElementById("tuesday"), document.getElementById("wednesday"), document.getElementById("thursday"), document.getElementById("friday")];
var clear_button = document.getElementById("clear-button");
var half_day_button = document.getElementById("half");
var full_day_button = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function clicked (day) {
    if (!day.classList.contains("clicked")){
        day.classList.add("clicked");
        selectedDays += 1;
        totalCostService();
    }
}

working_days[0].addEventListener("click", function () {clicked(working_days[0]);});
working_days[1].addEventListener("click", function () {clicked(working_days[1]);});
working_days[2].addEventListener("click", function () {clicked(working_days[2]);});
working_days[3].addEventListener("click", function () {clicked(working_days[3]);});
working_days[4].addEventListener("click", function () {clicked(working_days[4]);});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetSelection () {
    for (var i = 0; i < working_days.length; i++){  
        working_days[i].classList.remove("clicked");
    }  
    selectedDays = 0;
    totalCostService();
}
clear_button.addEventListener("click", resetSelection);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function selectHalfDay () {
    rate_per_day = 20;
    totalCostService();
    half_day_button.classList.add("clicked");
    full_day_button.classList.remove("clicked");
}
half_day_button.addEventListener("click", selectHalfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function selectFullDay () {
    rate_per_day = 35;
    totalCostService();
    full_day_button.classList.add("clicked");
    half_day_button.classList.remove("clicked");
}
full_day_button.addEventListener("click", selectFullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function totalCostService(){
    let finalCost = document.getElementById("calculated-cost");
    finalCost.innerHTML = rate_per_day * selectedDays;
}