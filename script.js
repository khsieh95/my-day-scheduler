// Global Variables
var currentDay = $("#currentDay");
var today = moment().format("MMM Do YY");
var saveButtonsClicked = $(".saveBtn");
var textAreas = $("textarea");
var userInput = JSON.parse(localStorage.getItem("userInput") || "[]");
var hourOfDay = $("#currentHour");
var currentHour = moment().hours();

$("#currentDay").text(today);
console.log(today);

// function for save button
saveButtonsClicked.on("click", function () {
  console.log("clicked");
});

// function to compare local time to time on calendar

$.each(textAreas, function () {
  var dataTime = this.getAttribute("data-time");
  if (parseInt(dataTime) < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present future");
  }

  if (parseInt(dataTime) === currentHour) {
    $(this).removeClass("past future");
    $(this).addClass("present");
  }

  if (parseInt(dataTime) > currentHour) {
    $(this).removeClass("past present");

    $(this).addClass("future");
  }
});
