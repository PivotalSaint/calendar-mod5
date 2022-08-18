// GIVEN I am using a daily planner to create a schedule
//create bootstrap elements to create a calendar
// WHEN I open the planner??
// THEN the current day is displayed at the top of the calendar
// need to add in a time clock function for reference
var hours = $("hour")
var currentTime = $("#currentDay");

$("#currentDay").text(moment().format("MMMM Do YYYY HH:mm:ss A"));
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// time blocks form 9-5



    // WHEN I view the time blocks for that day
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future
    // use css styling of past present future
function currentHour(){
    for (var i=9; i<=17; i++){
    if (currentHour.isBefore(currentTime)){
        $("#future")
    }
    if (currentHour.isAfter(currentTime)){
        $("#past")
    }
    else (currentHour.isSame(currentTime))
        $("timeBlock").css
    }
};
// WHEN I click into a time block
// THEN I can enter an event
// use button styling
document.addEventListener("click", currentHour);




// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// save to local storage, need to use JSON.stringify






// WHEN I refresh the page
// THEN the saved events persist