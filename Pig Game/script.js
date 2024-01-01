'use strict';

//acessing elements
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const rollNew = document.querySelector('.btn--new');
const rollHold = document.querySelector('.btn--hold');
const playerCurrScore0 = document.getElementById('current--0');
const playerCurrScore1 = document.getElementById('current--1');

//starting elements
score_0.textContent = 0;
score_1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activeplayer = 0; // active player 0 = player 1,active player 1 =player 2

//rolldice functionallity
rollDice.addEventListener('click', function() {
    //generate random number
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    //display roll image
    dice.classList.remove('hidden');
    dice.src = `/images/dice-${randomNumber}.png`;
    console.log(randomNumber);

    if (randomNumber !== 1) {
        //add dice to current scroe
        currentScore += randomNumber;
        document.getElementById(`current--${activeplayer}`).textContent =
            currentScore;
    } else {
        //player switch part
        document.getElementById(`current--${activeplayer}`).textContent = 0;
        currentScore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0;
    }
});