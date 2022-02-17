// to create colors
var buttonColours = ["red", "blue", "green", "yellow"];

// to store game pattern
var gamePattern = [];

//To create a sequence from 1 to 3
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  randomChosenColour = buttonColours[randomNumber];

  // to add the random color in game pattern
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  // to add audio to the chosen color
  var audio = new Audio("sounds/" + randomChosenColour + "mp3");
  audio.play();
}
nextSequence();