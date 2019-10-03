import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';

const guessButton = document.getElementById('guess-button');
const selectedRadioButton = document.querySelector('input:checked');
const resetButton = document.getElementById('reset-button');

const winsCount = document.getElementById('wins-count');
const losesCount = document.getElementById('loses-count');
const drawsCount = document.getElementById('draws-count');
let guessesCount = document.getElementById('guesses-count');
let resultDisplay = document.getElementById('result');
let guesses = 0;
let result = '';
let wins = 0;
let losses = 0;
let draws = 0;

const hardReset = () => {
    guesses = 0;
    result = '';
    wins = 0;
    losses = 0;
    draws = 0;
};

// define DOM utility function
const updateResults = () => {
    resultDisplay.textContent = result;
    guessesCount.textContent = guesses;
    winsCount.textContent = wins;
    losesCount.textContent = losses;
    drawsCount.textContent = draws;
};

const playRound = () => {
    guessesCount++;
    const userPick = selectedRadioButton.value;
    checkResult(userPick, getRandomThrow());
    updateResults();
};


// add event listeners
guessButton.addEventListener('click', playRound);
resetButton.addEventListener('click', hardReset);
