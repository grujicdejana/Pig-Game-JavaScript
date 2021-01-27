'use strict';

// Selecting elements
const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const score0 = document.querySelector('#score-0');
const score1 = document.getElementById('score-1');
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
dice.classList.add('hidden');

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player-active');
  player1.classList.toggle('player-active');
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //Generate a random number between 1-6
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  //console.log('diceNumber');

  //Display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  //Check for rolled = 1
  if (diceNumber !== 1) {
    //display new score
    currentScore += diceNumber;
    document.getElementById(
      `current-${activePlayer}`
    ).textContent = currentScore;
  } else {
    //switch to next player
    currentScore = 0;
    document.getElementById(
      `current-${activePlayer}`
    ).textContent = currentScore;
    switchPlayer();
  }

  if (scores[activePlayer] >= 100) {
    console.log(`Player ${activePlayer + 1} wins`);
  }
});

btnHold.addEventListener('click', function () {
  // add current score to active player's score
  scores[activePlayer] += currentScore;
  document.getElementById(`score-${activePlayer}`).textContent =
    scores[activePlayer];
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;

  //check if player's score is >=100
  if (scores[activePlayer] >= 20) {
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add('player-winner');
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add('player-winner');

    dice.classList.add('hidden');
    btnHold.disabled = true;
    btnRoll.disabled = true;
  } else {
    //switch to the next player
    switchPlayer();
  }
});
