// GIVEN I am using a daily planner to create a schedule
//create bootstrap elements to create a calendar
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// need to add in a time clock function for reference
var currentTimeBlocks = currentTime();
var currentTime = moment().format('llll');
$('#currentDay').html(currentTime);

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// time blocks form 9-5

function displayTimeBlockRows(currentTimeBlocks) {

    for (let i=9; i<=17; i++){

    }
    if (moment().isBefore(currentTime|String|Number|Date|Array));
    if (moment().isAfter(currentTime|String|Number|Date|Array));
    else (moment().isSameOrBefore(Moment|String|Number|Date|Array));
};



// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// use css styling of past present future
if (moment().isBefore(currentTime|String|Number|Date|Array));
if (moment().isAfter(currentTime|String|Number|Date|Array));
else (moment().isSameOrBefore(Moment|String|Number|Date|Array));
// moment().isBefore(Moment|String|Number|Date|Array);
// moment().isAfter(Moment|String|Number|Date|Array);
// moment().isSameOrBefore(Moment|String|Number|Date|Array);
// WHEN I click into a time block
// THEN I can enter an event
// use button styling




// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// save to local storage, need to use JSON.stringify





// WHEN I refresh the page
// THEN the saved events persist