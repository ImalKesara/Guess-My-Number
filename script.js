'use strict';
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const displayScore = (Score) => {
  document.querySelector('.score').textContent = Score;
};

const backGroundColor = (color) => {
  document.querySelector('body').style.backgroundColor = color;
};

const squareSize = (width) => {
  document.querySelector('.number').style.width = width;
};

const SecretNumber = (Secret) => {
  document.querySelector('.number').textContent = Secret;
};

const ranDom = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = ranDom();

const check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  //when player guess number was empty
  if (!guessNumber) {
    if (score > 0) {
      displayMessage('Empty Number ⛔');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game over 🏁');
      displayScore(0);
    }
    //when player is won
  } else if (guessNumber === secretNumber) {
    displayMessage('Correct number 🏆');
    backGroundColor('#60b347');
    squareSize('30rem');
    SecretNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when screat number and guess number not equal
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessNumber > secretNumber ? 'Too high ! 🏔️' : 'Too low ! 🪫'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('Game over 🏁');
      displayScore(0);
    }
  }
});
// reset button
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = ranDom();
  displayScore(score);
  displayMessage('Start guessing...');
  SecretNumber('?');
  backGroundColor('rgb(34, 34, 34)');
  squareSize('15rem');
  document.querySelector('.guess').value = '';
});

//when player's number too high
//   } else if (guessNumber > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high ! 🏔️';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game over 🏁';
//       document.querySelector('.score').textContent = 0;
//     }

//     //when player's number too low
//   } else if (guessNumber < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low ! 🪫';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game over 🏁';
//       document.querySelector('.score').textContent = 0;
//     }

//   document.querySelector('.message').textContent =
//     guessNumber > secretNumber ? 'Too high ! 🏔️' : 'Too low ! 🪫';
