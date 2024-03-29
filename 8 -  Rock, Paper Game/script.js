const computerMove = {
  0: "Rock",
  1: "Paper",
  2: "Scissor",
};

let userScore = 0;

const gamedetail = document.querySelector(".gamedetail");
const result = document.querySelector(".result");

const userScoreElement = document.querySelector(".myscore");

function playGame(userChoice) {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerGame = computerMove[randomNumber];
  if (userChoice === computerGame) {
    result.innerHTML = "it's a tie";
  } else if (
    (userChoice === "Rock" && computerGame === "Scissors") ||
    (userChoice === "Paper" && computerGame === "Rock") ||
    (userChoice === "Scissors" && computerGame === "Paper")
  ) {
    result.innerHTML = "You Won";
    userScore = userScore + 1;
    userScoreElement.innerHTML = userScore;
  } else {
    result.innerHTML = "You Lost!";
    userScore = userScore - 1;
  }

  gamedetail.innerHTML =
    "You choose " + userChoice + ", and the computer chose " + computerGame;
}

const gameOptions = document.querySelectorAll(".game-option");

gameOptions.forEach((element) => {
  element.addEventListener("click", () => {
    if (element === gameOptions[0]) {
      playGame("Rock");
    } else if (element === gameOptions[1]) {
      playGame("Paper");
    } else {
      playGame("Scissor");
    }
  });
});
