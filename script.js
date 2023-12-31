'use strict';

// const guess = document.querySelector('.message');
// console.log(guess.textContent);

// document.querySelector('.message').textContent = "let's go";
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 300;
// console.log(document.querySelector('.guess').value);
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

const check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Empty Number ⛔';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over 🏁';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number 🏆';
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ! 🏔️';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over 🏁';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low ! 🪫';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over 🏁';
      document.querySelector('.score').textContent = 0;
    }
  }
});
