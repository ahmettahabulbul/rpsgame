const userScore = document.getElementsByClassName("userscore")[0];
const computerScore = document.getElementsByClassName("computerscore")[0];
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const userChoose = document.getElementById("user_choose");
const computerChoose = document.getElementById("computer_choose");
const mesagge = document.getElementsByClassName("text")[0];

let user = 0;
let computer = 0;

function computerSelection() {
  const select = ["rock", "hand", "scissors"];
  const rnmbr = Math.floor(Math.random() * 3);
  computerChoose.setAttribute("src", `img/${select[rnmbr]}.png`);
  return select[rnmbr];
}
function eventListeners() {
  rock.addEventListener("click", function () {
    userChoose.setAttribute("src", `img/rock.png`);
    let cSelect = computerSelection();
    result("rock", cSelect);
  });
  scissors.addEventListener("click", function () {
    userChoose.setAttribute("src", `img/scissors.png`);
    let cSelect = computerSelection();
    result("scissors", cSelect);
  });
  paper.addEventListener("click", function () {
    userChoose.setAttribute("src", `img/hand.png`);
    let cSelect = computerSelection();
    result("paper", cSelect);
  });
}
eventListeners();
function result(user, computer) {
  switch (user + computer) {
    case "rockscissors":
      win();
      break;
    case "paperrock":
      win();
      break;
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
      lose();
      break;
    case "paperscissors":
      lose();
      break;
    case "scissorsrock":
      lose();
      break;
    case "rockrock":
      tie();
      break;
    case "paperpaper":
      tie();
      break;
    case "scissorsscissors":
      tie();
      break;
  }
}
function win() {
  user = user + 1;
  mesagge.innerHTML = "YOU WİN";
  userScore.innerHTML = user.toString();
}
