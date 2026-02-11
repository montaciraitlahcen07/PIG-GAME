"use strict";
let player_1_turn = true;
let player_1_totalScore = 0;
let player_1_currentScore = 0;
let player_2_turn = false;
let player_2_totalScore = 0;
let player_2_currentScore = 0;

function newGame() {
  player_1_turn = true;
  player_1_totalScore = 0;
  player_1_currentScore = 0;
  player_2_turn = false;
  player_2_totalScore = 0;
  player_2_currentScore = 0;
  document.querySelector(".dice").classList.add("hidden");
  document.querySelector(".total-score-1").textContent = 0;
  document.querySelector(".current-score-1").textContent = 0;
  document.querySelector(".total-score-2").textContent = 0;
  document.querySelector(".current-score-2").textContent = 0;
  document.querySelector(".player-1-bg").style.backgroundColor = "#DBAEBA";
  document.querySelector(".player-2-bg").style.backgroundColor = "#BD7A94";
  document.querySelector(".dice").classList.add("hidden");
  document.querySelector(".dice-1").classList.add("hidden");
  document.querySelector(".dice-2").classList.add("hidden");
  document.querySelector(".dice-3").classList.add("hidden");
  document.querySelector(".dice-4").classList.add("hidden");
  document.querySelector(".dice-5").classList.add("hidden");
  document.querySelector(".dice-6").classList.add("hidden");
  document.querySelector(".dice-7").classList.add("hidden");
  document.querySelector(".header-2").style.color = "#333333";
  document.querySelector(".header-1").style.color = "#333333";
  document.querySelector(".header-1").classList.add("font-bold");
  document.querySelector(".header-2").classList.remove("font-bold");
}
function diceRender(dice) {
  document.querySelector(".dice").classList.remove("hidden");
  switch (dice) {
    case 1:
      document.querySelector(".dice-4").classList.remove("hidden");
      document.querySelector(".dice-1").classList.add("hidden");
      document.querySelector(".dice-2").classList.add("hidden");
      document.querySelector(".dice-3").classList.add("hidden");
      document.querySelector(".dice-5").classList.add("hidden");
      document.querySelector(".dice-6").classList.add("hidden");
      document.querySelector(".dice-7").classList.add("hidden");
      break;
    case 2:
      document.querySelector(".dice-5").classList.remove("hidden");
      document.querySelector(".dice-3").classList.remove("hidden");
      document.querySelector(".dice-1").classList.add("hidden");
      document.querySelector(".dice-2").classList.add("hidden");
      document.querySelector(".dice-6").classList.add("hidden");
      document.querySelector(".dice-7").classList.add("hidden");
      break;
    case 3:
      document.querySelector(".dice-3").classList.remove("hidden");
      document.querySelector(".dice-4").classList.remove("hidden");
      document.querySelector(".dice-5").classList.remove("hidden");
      document.querySelector(".dice-1").classList.add("hidden");
      document.querySelector(".dice-2").classList.add("hidden");
      document.querySelector(".dice-6").classList.add("hidden");
      document.querySelector(".dice-7").classList.add("hidden");
      break;
    case 4:
      document.querySelector(".dice-1").classList.remove("hidden");
      document.querySelector(".dice-3").classList.remove("hidden");
      document.querySelector(".dice-5").classList.remove("hidden");
      document.querySelector(".dice-7").classList.remove("hidden");
      document.querySelector(".dice-2").classList.add("hidden");
      document.querySelector(".dice-4").classList.add("hidden");
      document.querySelector(".dice-6").classList.add("hidden");
      break;
    case 5:
      document.querySelector(".dice-1").classList.remove("hidden");
      document.querySelector(".dice-3").classList.remove("hidden");
      document.querySelector(".dice-4").classList.remove("hidden");
      document.querySelector(".dice-5").classList.remove("hidden");
      document.querySelector(".dice-7").classList.remove("hidden");
      document.querySelector(".dice-2").classList.add("hidden");
      document.querySelector(".dice-6").classList.add("hidden");
      break;
    case 6:
      document.querySelector(".dice-1").classList.remove("hidden");
      document.querySelector(".dice-2").classList.remove("hidden");
      document.querySelector(".dice-3").classList.remove("hidden");
      document.querySelector(".dice-5").classList.remove("hidden");
      document.querySelector(".dice-6").classList.remove("hidden");
      document.querySelector(".dice-7").classList.remove("hidden");
      document.querySelector(".dice-4").classList.add("hidden");
      break;
  }
}
function rollDice() {
  let dice = parseInt(Math.random() * 6 + 1);
  diceRender(dice);
  return dice;
}
function hold() {
  if (player_1_turn && player_1_totalScore <= 100) {
    player_1_totalScore += player_1_currentScore;
    document.querySelector(".total-score-1").textContent = player_1_totalScore;
    player_1_currentScore = 0;
    document.querySelector(".current-score-1").textContent =
      player_1_currentScore;
    if (player_1_totalScore >= 100) {
      document.querySelector(".player-1-bg").style.backgroundColor = "#2F2F2F";
      player_1_currentScore = 0;
      document.querySelector(".current-score-1").textContent =
        player_1_currentScore;
      document.querySelector(".header-1").style.color = "#C7365F";
      return 0;
    }
    player_1_turn = false;
    player_2_turn = true;
    document.querySelector(".player-2-bg").style.backgroundColor = "#DBAEBA";
    document.querySelector(".player-1-bg").style.backgroundColor = "#BD7A94";
    document.querySelector(".header-1").classList.remove("font-bold");
    document.querySelector(".header-2").classList.add("font-bold");
  } else if (player_2_turn && player_2_totalScore <= 100) {
    player_2_totalScore += player_2_currentScore;
    document.querySelector(".total-score-2").textContent = player_2_totalScore;
    player_2_currentScore = 0;
    document.querySelector(".current-score-2").textContent =
      player_2_currentScore;
    if (player_2_totalScore >= 100) {
      document.querySelector(".player-2-bg").style.backgroundColor = "#2F2F2F";
      player_2_currentScore = 0;
      document.querySelector(".current-score-2").textContent =
        player_2_currentScore;
      document.querySelector(".header-2").style.color = "#C7365F";
      return 0;
    }
    player_2_turn = false;
    player_1_turn = true;
    document.querySelector(".player-1-bg").style.backgroundColor = "#DBAEBA";
    document.querySelector(".player-2-bg").style.backgroundColor = "#BD7A94";
    document.querySelector(".header-2").classList.remove("font-bold");
    document.querySelector(".header-1").classList.add("font-bold");
  }
}
function gamePlay() {
  let dice = rollDice();
  if (dice != 1) {
    if (player_1_turn) {
      player_1_currentScore += dice;
      document.querySelector(".current-score-1").textContent =
        player_1_currentScore;
    } else {
      player_2_currentScore += dice;
      document.querySelector(".current-score-2").textContent =
        player_2_currentScore;
    }
  } else {
    if (player_1_turn) {
      player_1_turn = false;
      player_2_turn = true;
      player_1_currentScore = 0;
      document.querySelector(".current-score-1").textContent =
        player_1_currentScore;
      document.querySelector(".player-2-bg").style.backgroundColor = "#DBAEBA";
      document.querySelector(".player-1-bg").style.backgroundColor = "#BD7A94";
      document.querySelector(".header-1").classList.remove("font-bold");
      document.querySelector(".header-2").classList.add("font-bold");
    } else {
      player_2_turn = false;
      player_1_turn = true;
      player_2_currentScore = 0;
      document.querySelector(".current-score-2").textContent =
        player_2_currentScore;
      document.querySelector(".player-1-bg").style.backgroundColor = "#DBAEBA";
      document.querySelector(".player-2-bg").style.backgroundColor = "#BD7A94";
      document.querySelector(".header-2").classList.remove("font-bold");
      document.querySelector(".header-1").classList.add("font-bold");
    }
  }
}
document.querySelector(".new-game").addEventListener("click", newGame);
document.querySelector(".roll-dice").addEventListener("click", gamePlay);
document.querySelector(".hold").addEventListener("click", hold);
