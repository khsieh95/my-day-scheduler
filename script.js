// Global Variables
var currentDay = $("#currentDay");
var saveButtonsClicked = $(".saveBtn");
var textAreas = $("textarea");
var userInput = JSON.parse(localStorage.getItem("userInput") || "[]");
var today = moment().format("MMM Do YY");
var currentHour = moment().format("k");

$("#currentDay").text(today);

// function for save button and to locally store
saveButtonsClicked.on("click", function () {
  console.log("clicked");
  var userText = $(this.previousElementSibling).val();
  var parentTime = $(this).parent().attr("id");
  localStorage.setItem(parentTime, userText);
  console.log(localStorage);
});

// function to compare local time to time on calendar
$.each(textAreas, function () {
  var dataTime = this.getAttribute("data-time");
  if (parseInt(dataTime) < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present future");
  } else if (parseInt(dataTime) == currentHour) {
    $(this).removeClass("past future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past present");
    $(this).addClass("future");
  }
});
console.log(textAreas);
console.log(currentHour);
