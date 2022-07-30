var randomNumber1 = (Math.floor((Math.random()*6)))+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = (Math.floor((Math.random()*6)))+1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";

var namePlayerOne = prompt("Enter Name of Player One");
var namePlayerTwo = prompt("Enter Name of Player Two");


document.querySelector(".playerOne").innerHTML = namePlayerOne;
document.querySelector(".playerTwo").innerHTML = namePlayerTwo;


document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1>randomNumber2) {
  document.querySelector(".refresh").innerHTML = namePlayerOne + " Wins!"
} else if (randomNumber1<randomNumber2) {
  document.querySelector(".refresh").innerHTML = namePlayerTwo + " Wins!"
} else {
document.querySelector(".refresh").innerHTML = "Draw!"
}
