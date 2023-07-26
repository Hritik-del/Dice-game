var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImageName = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageName);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

randomImageName = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageName);

var whoWins = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    whoWins.innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    whoWins.innerHTML = "Player 2 Wins!🚩"
}
else{
    whoWins.innerHTML = "Draw!📍"
}