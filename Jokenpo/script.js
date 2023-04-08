const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML =
      userChoice[0].toUpperCase() + userChoice.substring(1);
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML =
    computerChoice[0].toUpperCase() + computerChoice.substring(1);
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Draw!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Lose!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Lose!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Lose!";
  }

  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "Win!";
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    result = "Win!";
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    result = "Win!";
  }
  resultDisplay.innerHTML = result[0].toUpperCase() + result.substring(1);
}
