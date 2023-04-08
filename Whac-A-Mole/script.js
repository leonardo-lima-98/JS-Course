const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelectorAll("#time-left");
const scoreDisplay = document.querySelectorAll("#score");
const speedGame = document.getElementById("speed");
let result = 0;
let spedao;
function slider() {
  speed = speedGame.value * 100;
  console.log(speed);
  speed = spedao;
}

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
}

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, spedao);
  console.log(timerId);
}
slider();

moveMole();
