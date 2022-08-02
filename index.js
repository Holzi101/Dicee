//Adding a prompt to tipe in the numbers of the players
var namePlayerOne = prompt("Enter Name of Player One");
var namePlayerTwo = prompt("Enter Name of Player Two");

//Adding the names to the game
document.querySelector(".playerOne").innerHTML = namePlayerOne;
document.querySelector(".playerTwo").innerHTML = namePlayerTwo;

//Creating the function "rollTheDice()"
function rollTheDice(){

//Creating random numbers
    var randomNumber1 = (Math.floor((Math.random() * 6))) + 1;
    var randomNumber2 = (Math.floor((Math.random() * 6))) + 1;

//Using the random nubmers to create the random pictures
  var randomImage1 = "images/dice" + randomNumber1 + ".png";
  var randomImage2 = "images/dice" + randomNumber2 + ".png";

//Changing the current images of the dices in respective to the random image
  document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
  document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

//Adding logic to the game
  if (randomNumber1 > randomNumber2) {
    document.querySelector(".refresh").innerHTML = namePlayerOne + " Wins!"
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".refresh").innerHTML = namePlayerTwo + " Wins!"
  } else {
    document.querySelector(".refresh").innerHTML = "Draw!"
  }

  //console log the results of the game
  var result = document.querySelector(".refresh").innerHTML;
  console.log(result);
}

//Adding an eventListener: When clicking on the button, execute a new game
document.querySelector(".dice-button").addEventListener("click", rollTheDice);

//Creating the function "reload()"
function reload() {
  location.reload();
}

//Adding an eventListener: When clicking on the button, refresh the page
document.querySelector(".refresh-button").addEventListener("click", reload)
