const btn = document.querySelectorAll(".userOption");
let numBtn = btn.length;
let uSelection;
let computerSelection

//Captures user's choice into a variable uSelection
let showUserSelect = function () {
  uSelection = this.id;
}
document.getElementById("rock").onclick = showUserSelect;
document.getElementById("paper").onclick = showUserSelect;
document.getElementById("scissors").onclick = showUserSelect;

//Computer's selection based on randomly generated number
let getCompSelection = function r () {
  let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  let computerSelection;
  switch(randomNumber) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
  console.log(`User Chooses: ${uSelection}`)
  console.log(`Computer Chooses: ${computerSelection}`);
  return computerSelection
};


for (let i = 0; i < numBtn; i++) {
btn[i].addEventListener("click", getCompSelection)
};
