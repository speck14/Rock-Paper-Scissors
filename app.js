const btn = document.querySelectorAll(".userOption");
let numBtn = btn.length;

//Captures user's choice into a variable uSelection
let showUserSelect = function () {
  uSelection = this.id;
  return uSelection;
}
document.getElementById("rock").onclick = showUserSelect;
document.getElementById("paper").onclick = showUserSelect;
document.getElementById("scissors").onclick = showUserSelect;

//Computer's selection based on randomly generated number
let getCompSelection = function r() {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (randomNumber) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  };
  console.log(`User Chooses: ${uSelection}`);
  console.log(`Computer Chooses: ${computerSelection}`);
  return computerSelection;
};

//Compare user choice with computer selection to determine game results
function compareChoice(cSelect, uSelect) {
  if (cSelect === uSelect) {
    let gameResult = "It's a tie!"
    console.log(gameResult);
    return gameResult;
  } else if (cSelect === "rock" && uSelect === "scissors" || cSelect === "paper" && uSelect === "rock" || cSelect === "scissors" && uSelect === "paper") {
    let gameResult = "You lose!"
    console.log(gameResult);
    return gameResult;
  } else {
    let gameResult = "You win!"
    console.log(gameResult);
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
