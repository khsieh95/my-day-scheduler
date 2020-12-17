console.log("hi kevin");

var currentDay = $("#currentDay");
var today = moment().format("MMM Do YY");
var saveButtonsClicked = $(".saveBtn");
var userInput = JSON.parse(localStorage.getItem("userInput") || "[]");
var textAreas = $("textarea");

$("#currentDay").text(today);
console.log(today);

// function for save button
saveButtonsClicked.on("click", function () {
  console.log("clicked");
});
