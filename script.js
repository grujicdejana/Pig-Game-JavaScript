'use strict';

// Selecting elements
const score0 = document.querySelector('#score-0');
const score1 = document.getElementById('score-1');
const dice = document.querySelector('.dice');
const current0 = document.getElementById('current-0');
const current1 = document.getElementById('current-1');

//Starting conditions
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
dice.classList.add('hidden');

document.querySelector('.btn-roll').addEventListener('click', function () {
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log('diceNumber');

  switch (diceNumber) {
    case 1:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-1.png';
      break;
    case 2:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-2.png';
      break;
    case 3:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-3.png';
      break;
    case 4:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-4.png';
      break;
    case 5:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-5.png';
      break;
    case 6:
      dice.classList.remove('hidden');
      document.querySelector('.dice').src = 'dice-6.png';
      break;
  }
});
