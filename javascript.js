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
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    console.log("Lose");
  } else console.log("win");
}
function playRound(playerSelection, computerSelection) {
  checkWinner();
  console.log(playerSelection, computerSelection);
}
let playerSelection = prompt("what is your choice ?");
let computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
