"use strict";

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}
function checkWinner() {
  if (playerSelection === computerSelection) {
    console.log("Draw");
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log(
      `You lose, you choose ${playerSelection} and computer choose ${computerSelection}`
    );
  } else {
    console.log(
      `You win, you choose ${playerSelection} and computer choose ${computerSelection}`
    );
  }
}
let playerSelection = prompt("what is your choice ?");
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  checkWinner();
}

playRound(playerSelection, computerSelection);

function game() {
  playRound();
}
game();
