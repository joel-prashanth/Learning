'use strict';

//DOM Manipulation with DOM apis

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//Handling Events with Event Listeners

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //NO INPUT
    // document.querySelector('.message').textContent =
    //   'Enter a Number first...🤷‍♂️';

    displayMessage('Enter a Number first...🤷‍♂️');
  }

  //WIN
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉 Correct Number!';

    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //Highscore Logic
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //GUESS DIFFERENT FROM SECRET NUMBER - REFACTOR
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? displayMessage('📈 Guess is too high!')
          : displayMessage('📉 Guess is too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost the Game 😟';

      displayMessage('You Lost the Game 😟');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Guess is too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game 😟';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //GUESS TOO LOW
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Guess is too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost the Game 😟';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Reset Logic

document.querySelector('.again').addEventListener('click', gameReset);

function gameReset() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
}
