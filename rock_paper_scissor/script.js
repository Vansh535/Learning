const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerchoice) {
  const computerchoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerchoice === computerchoice) {
    result = "It's a tie";
  } else {
    switch (playerchoice) {
      case "rock":
        result = computerchoice === "scissors" ? "you win" : "you lose";
        break;
      case "scissors":
        result = computerchoice === "paper" ? "you win" : "you lose";
        break;
      case "paper":
        result = computerchoice === "rock" ? "you win" : "you lose";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerchoice}`;
  computerDisplay.textContent = `computer: ${computerchoice}`;
  resultDisplay.textContent = `result: ${result}`;
  resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "you win":
      resultDisplay.classList.add("greenText");
      break;
    case "you lose":
      resultDisplay.classList.add("redText");
      break;

    default:
      break;
  }
}
