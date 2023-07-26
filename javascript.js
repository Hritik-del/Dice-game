var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImageName = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageName);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

randomImageName = "images/dice" + randomNumber2 + ".png";

img1 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomImageName);