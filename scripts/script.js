function computerPlay() {
  let play = ["rock", "paper", "scissors"];

  return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase().trim();
  let computer = computerSelection.toLowerCase();

  let result = gameRules(player, computer);

  if (player == result) {
    return `You Won!! ${player} beats ${computer}`;
  } else if (computer == result) {
    return `You Lost!! ${computer} beats ${player}`;
  } else if (player == computer) {
    return "It's a tie!!";
  } else {
    return "Invalid input.";
  }
}

function gameRules(moveOne, moveTwo) {
  if (
    (moveOne == "paper" && moveTwo == "rock") ||
    (moveTwo == "paper" && moveOne == "rock")
  ) {
    return "paper";
  } else if (
    (moveOne == "rock" && moveTwo == "scissors") ||
    (moveTwo == "rock" && moveOne == "scissors")
  ) {
    return "rock";
  } else if (
    (moveOne == "scissors" && moveTwo == "paper") ||
    (moveTwo == "scissors" && moveOne == "paper")
  ) {
    return "scissors";
  } else if (moveOne == moveTwo) {
    return "tie";
  } else {
    return "Invalid input.";
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.classList.add("disabled");
    button.disabled = true;
  })
}

function game(event) {

  let playerSelection = event.target.getAttribute("data-value");
  let computerSelection = computerPlay();

  let roundResult = playRound(playerSelection, computerSelection);

  const output = document.querySelector("#output");
  const displayResult = document.createElement("div");
  const displayScore = document.createElement("div");
  const displayFinalResult = document.createElement("div");

  if (roundResult.includes("Won")) {
    player++;
    displayResult.textContent = roundResult;
    displayScore.textContent = "Player: " + player + " Computer: " + computer;
  } else if (roundResult.includes("Lost")) {
    computer++;
    displayResult.textContent = roundResult;
    displayScore.textContent = "Player: " + player + " Computer: " + computer;
  } else {
    displayResult.textContent = roundResult;
    displayScore.textContent = "Player: " + player + " Computer: " + computer;
  }
  if (output.hasChildNodes()) {
    output.replaceChild(displayResult, output.childNodes[0]);
    output.replaceChild(displayScore, output.childNodes[1]);
  } else {
    output.appendChild(displayResult);
    output.appendChild(displayScore);
  }

  
  if (player == 5) {
    displayFinalResult.textContent = "Player won the game!!";
    output.appendChild(displayFinalResult);
    disableButtons();
  } else if (computer == 5) {
    displayFinalResult.textContent = "Computer won the game!!";
    output.appendChild(displayFinalResult);
    disableButtons();
  }

}

let player = 0;
let computer = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", game);
});
