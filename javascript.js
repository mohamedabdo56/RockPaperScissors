"use strict";
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = Math.floor(Math.random() * options.length);
  return options[choice];
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  let res = checkWinner(playerSelection, computerSelection);
  if (res === "Tie") {
    return `it's a tie`;
  } else if (res === "player") {
    return `You Win ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose ${computerSelection} beats ${playerSelection}`;
  }
}
function getPlayerChoice() {
  let validateInput = false;
  while (validateInput === false) {
    const playerChoice = prompt("rock paper scissors");
    if (playerChoice === null) {
      continue;
    }
    const playerChoiceInLower = playerChoice.toLocaleLowerCase();
    if (options.includes(playerChoiceInLower)) {
      validateInput = true;
      return playerChoiceInLower;
    }
  }
}
function game() {
  console.log("Welcome!!");
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkWinner(playerSelection, computerSelection) === "Player") {
      scorePlayer++;
    } else if (checkWinner(playerSelection, computerSelection) === "Computer") {
      scoreComputer++;
    }
  }
  console.log(`score player : ${scorePlayer}`);
  console.log(`score computer : ${scoreComputer}`);
  if (scorePlayer > scoreComputer) {
    console.log(`player is the winner`);
  } else if (scoreComputer > scorePlayer) {
    console.log(`computer is the winner`);
  } else if (scorePlayer === scoreComputer) {
    console.log(`draw`);
  }
}

game();
