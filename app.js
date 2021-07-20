const btn = document.querySelectorAll(".userOption");
let numBtn = btn.length;
const uResult = document.getElementById('uResult');
const cResult = document.getElementById('cResult');
const outcome = document.getElementById('outcome');
const computerScore = document.getElementById('computerScore');
const userScore = document.getElementById('userScore');
let compScore = 0;
let uScore = 0;

//Captures user's choice into a variable uSelection
let showUserSelect = function () {
  uSelection = this.id;
  return uSelection;
}
document.getElementById('rock').onclick = showUserSelect;
document.getElementById('paper').onclick = showUserSelect;
document.getElementById('scissors').onclick = showUserSelect;
document.getElementById('resetScore').onclick = resetScore;

//Computer's selection based on randomly generated number
let getCompSelection = function r() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      computerSelection = 'rock';
      break;
    case 2:
      computerSelection = 'paper';
      break;
    case 3:
      computerSelection = 'scissors';
      break;
  };
  uResult.innerHTML = `User Chooses: ${uSelection}`;
  cResult.innerHTML = `Computer Chooses: ${computerSelection}`;
  return computerSelection;
};

//Compare user choice with computer selection to determine and display game results
function compareChoice(cSelect, uSelect) {
  if (cSelect === uSelect) {
    let gameResult = "It's a tie!"
    outcome.innerHTML = gameResult;
    computerScore.innerHTML = compScore;
    userScore.innerHTML = uScore;
    return gameResult;
  } else if (cSelect === "rock" && uSelect === "scissors" || cSelect === "paper" && uSelect === "rock" || cSelect === "scissors" && uSelect === "paper") {
    let gameResult = "You lose!"
    outcome.innerHTML = gameResult;
    compScore ++;
    computerScore.innerHTML = compScore;
    userScore.innerHTML = uScore;
    return gameResult;
  } else {
    let gameResult = "You win!"
    outcome.innerHTML = gameResult;
    uScore ++;
    computerScore.innerHTML = compScore;
    userScore.innerHTML = uScore;
    return gameResult;
  };
};

//Generates computer's response and game results when user makes selection
for (let i = 0; i < numBtn; i++) {
  btn[i].addEventListener("click", () => {
    getCompSelection();
    compareChoice(computerSelection, uSelection);
  })
};

//Resets score tracker
function resetScore () {
  uScore = 0;
  compScore= 0;
  computerScore.innerHTML = compScore;
  userScore.innerHTML = uScore;
}
