const comScore = document.querySelector("#comScore")
const playScore = document.querySelector("#playScore")

const comSelect = document.querySelector("#comSelect")
const playSelect = document.querySelector("#playSelect")

const win = document.querySelector("#win")
const playAgain = document.querySelector("#playAgain")
const resetBtn = document.querySelector("#reset")

const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorBtn = document.querySelector("#scissor")

let playerScore = 0
let computerScore = 0

function updateScore() {
    playScore.textContent = playerScore
    comScore.textContent = computerScore
}

function ComputerChoice() {
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
    const computerChoice = ComputerChoice()

    if (playerChoice === "rock") {
        playSelect.innerHTML = `<p>Player Select:</p><img src="images/rock-sign.png">`
    } else if (playerChoice === "paper") {
        playSelect.innerHTML = `<p>Player Select:</p><img src="images/paper-sign.png">`
    } else if (playerChoice === "scissor") {
        playSelect.innerHTML = `<p>Player Select:</p><img src="images/scissor-sign.png">`
    }

    if (computerChoice === "rock") {
        comSelect.innerHTML = `<p>Computer Select:</p><img src="images/rock-sign.png">`
    } else if (computerChoice === "paper") {
        comSelect.innerHTML = `<p>Computer Select:</p><img src="images/paper-sign.png">`
    } else if (computerChoice === "scissor") {
        comSelect.innerHTML = `<p>Computer Select:</p><img src="images/scissor-sign.png">`
    }

    if (playerChoice === computerChoice) {
        win.textContent = "It's a Draw"
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        win.textContent = "Player Win"
        playerScore++
    } else {
        win.textContent = "Computer Win"
        computerScore++
    }

    updateScore()
};

rockBtn.addEventListener("click", () => {
    play("rock")
});

paperBtn.addEventListener("click", () => {
    play("paper")
});

scissorBtn.addEventListener("click", () => {
    play("scissor")
});

playAgain.addEventListener("click", () => {
    win.textContent = ""
    playSelect.innerHTML = "Player Select:"
    comSelect.innerHTML = "Computer Select:"
});

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  playSelect.innerHTML = "<p>Player Select</p>";
  comSelect.innerHTML = "<p>Computer Select</p>";
  win.textContent = "";
});

updateScore()