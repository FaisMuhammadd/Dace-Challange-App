let randomNumberPlayerOne = Math.floor(Math.random() * 6) + 1
// get dice1-dice6 picture
let randomDiceImage = "dice" + randomNumberPlayerOne + ".png"
// get folder image in picture
let randomImageSource = "images/" + randomDiceImage
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", randomImageSource)

let randomNumberPlayerTwo = Math.floor(Math.random() * 6) + 1
let randomImageSource2 = "images/dice" + randomNumberPlayerTwo + ".png"
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)

// if player wins
if (randomNumberPlayerOne > randomNumberPlayerTwo) {
   document.querySelector("h1").innerHTML = "🚩 Player 1 WINS !!"
} else if (randomNumberPlayerTwo > randomNumberPlayerOne) {
   document.querySelector("h1").innerHTML = "🚩 Player 2 WINS !!"
} // if player draws
else {
   document.querySelector("h1").innerHTML = "DRAW !!"
}