'use strict';

//Selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

//Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

const gameReset = function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;
  diceElement.classList.add('hidden');
  player0Element.classList.add('player--active');
  document
  .querySelector(`.player--${activePlayer}`)
  .classList.remove('player--winner');
};

btnNew.addEventListener('click', gameReset);



//Rolling the die
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate a random number from 1-6
    const diceRollNumber = Math.trunc(Math.random() * 6) + 1;

    //2. Display the die
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRollNumber}.png`;

    //3. Check for 1 and if true switch
    if (diceRollNumber !== 1) {
      currentScore += diceRollNumber;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    //2. Check if its >= 100 if so finish the game
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to the next player.

      switchPlayer();
    }
  }
});
