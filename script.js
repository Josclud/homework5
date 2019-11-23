// put today's date in the calendar
// get the stuff (if any) out of local storage to populate the calendar
// if the workDay object is not already in local storage, put it there
// rows are textareas

let workDay = {
  "8 AM": "test0",
  "9 AM": "test1",
  "10 AM": "test2",
  "11 AM": "test3",
  "12 PM": "test4",
  "1 PM": "test5",
  "2 PM": "test6",
  "3 PM": "test7",
  "4 PM": "test8",
  "5 PM": "test9",
};

// get the item using jquery
//fridgeMagnet.text($(this).attr("data-letter"))
// $("#date-today").text = moment().format('dddd');

// $(document).ready(function(){
//   for(const property in workDay) {
//     console.log(property + ": " + workDay[property]);
//     $()
//   }
// })


$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

// loads the contents of the object into the page
let counter = 1;
for(const property in workDay) {
  let textEntry = "#text-entry" + counter
  $(textEntry).text(workDay[property]);
  let timeId = "#time" + counter;
  let presentHour = moment().hour() - 6;  // TEMPORARILY SUBTRACTING FOR TESTING PURPOSES
  let timeNumber = hourNumberFromHourString($(timeId).text());
  if(timeNumber < presentHour) {
    console.log('if statement')
    // set the style to past-hour
    $(textEntry).addClass("past-hour");
  } else if (timeNumber > presentHour) {
    // set style to future-hour
    $(textEntry).addClass("future-hour");
  } else {
    // set style to present-hour
    $(textEntry).addClass("present-hour");
  }
  counter ++;
}

$(".calendar-row").each(() => {
  console.log('XXX', $('.time').text());
  
  // $(".calendar-row").text("HELLO");
});

function hourNumberFromHourString(hourString) {
  switch(hourString) {
    case "8 AM": return 8;
    case "9 AM": return 9;
    case "10 AM": return 10;
    case "11 AM": return 11;
    case "12 PM": return 12;
    case "1 PM": return 13;
    case "2 PM": return 14;
    case "3 PM": return 15;
    case "4 PM": return 16;
    case "5 PM": return 17;
  }
}

// still TBD
//onclick handler for each of the rows: to write the text into the workDay object
//event.preventDefault();
// if there isn't an object in local storage, create one
// then
// get the workDay object from local storage
// set the row value
// put it back in local storage


// still TBD
// get the workDay object from local storage
// save it to local storage - when? on save, I guess
function initializeLocalStorage() {
  localStorage.setItem('workDay', JSON.stringify(workDay));
};

function saveSchedule(row) {
  if(!localStorage.getItem('workDay')) {
    intitalizeLocalStorage();
  }
  let workHours = JSON.parse(localStorage.getItem('workDay'));
  //workHours - figure out how to use "this"
  
  //else {
  //   let scores = JSON.parse(localStorage.getItem("scoreArray"));
  //   scores.push(userScore);
  //   localStorage.setItem('scoreArray', JSON.stringify(scores));
  // }
}