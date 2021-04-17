const userScore = document.getElementsByClassName("userscore")[0];
const computerScore = document.getElementsByClassName("computerscore")[0];
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const userChoose = document.getElementById("user_choose");
const computerChoose = document.getElementById("computer_choose");
const mesagge = document.getElementsByClassName("text")[0];
const reset = document.getElementById("reset");
let user = 0;
let computer = 0;

function computerSelection() {
  const select = ["rock", "paper", "scissors"];
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
    userChoose.setAttribute(
      "src",
      `img/paper.png
    `
    );
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
    case "scissorpaper":
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
  mesagge.innerHTML = "YOU WIN";
  userScore.innerHTML = user.toString();
}
function lose() {
  computer = computer + 1;
  mesagge.innerHTML = "COMPUTER WINS";
  computerScore.innerHTML = computer.toString();
}
function tie() {
  mesagge.innerHTML = "TIE";
}
reset.addEventListener("click", function () {
  userScore.innerHTML = "0";
  computerScore.innerHTML = "0";
  computerChoose.src = "img/ask.png";
  userChoose.src = "img/ask.png";
  mesagge.innerHTML = "CHOOSE ONE";
  computer = 0;
  user = 0;
});
