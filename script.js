'use strict';

// const guess = document.querySelector('.message');
// console.log(guess.textContent);

// document.querySelector('.message').textContent = "let's go";
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 300;
// console.log(document.querySelector('.guess').value);

let score = 20;

const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const check = document.querySelector('.check');
check.addEventListener('click', () => {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log(guessNumber, typeof guessNumber);

    //when player guess number was empty
    if (!guessNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = 'Empty Number ⛔';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game over 🏁';
            document.querySelector('.score').textContent = 0;
        }
        //when player is won
    } else if (guessNumber === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number 🏆';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        //when player's number too high
    } else if (guessNumber > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high ! 🏔️';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game over 🏁';
            document.querySelector('.score').textContent = 0;
        }

        //when player's number too low
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

const randomGernerator = fucntion() {

}