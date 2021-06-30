const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const btn = document.querySelectorAll(".userOption");
let numBtn = btn.length;

rock.onclick = function() {
  console.log("Rock selected")
};

paper.onclick = function () {
  console.log("Paper selected")
};

scissors.onclick = function () {
  console.log("Scissor selected")
};



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
  console.log(`Computer Chooses: ${computerSelection}`);
  return computerSelection
};


for (let i = 0; i < numBtn; i++) {
btn[i].addEventListener("click", getCompSelection)
};
