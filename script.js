// Global Variables
var currentDay = $("#currentDay");
var saveButtonsClicked = $(".saveBtn");
var textAreas = $("textarea");
var userInput = JSON.parse(localStorage.getItem("userInput") || "[]");
var today = moment().format("MMM Do YY");
var currentHour = moment().format("k");

$("#currentDay").text(today);

// For loop to match userInput with buttons and values
for (i = 0; i < 9; i++) {
  var objectValues = userInput["saveBtn" + i];
  var textAreaClass = textAreas[i];

  textAreaClass.text = objectValues;
  console.log(textAreaClass);
}

// function for save button and to locally store
saveButtonsClicked.on("click", function () {
  var userText = $(this.previousElementSibling).val();
  var saveButtonId = this.id;
  userInput[saveButtonId] = userText;
  localStorage.setItem(saveButtonId, userText);

  console.log(userText);
  console.log(saveButtonId);
});

// function to compare local time to time on calendar
$.each(textAreas, function () {
  var dataTime = this.getAttribute("data-time");
  if (dataTime < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present future");
  } else if (dataTime == currentHour) {
    $(this).removeClass("past future");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past present");
    $(this).addClass("future");
  }
});
console.log(currentHour);
