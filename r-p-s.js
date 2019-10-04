import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';

const guessButton = document.getElementById('guess-button');
const resetButton = document.getElementById('reset-button');
const winsSpan = document.getElementById('wins-count');
const lossesSpan = document.getElementById('losses-count');
const drawsSpan = document.getElementById('draws-count');
const guessesSpan = document.getElementById('guesses-count');
const resultsSpan = document.getElementById('result');

//set some initial values
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
    updateResults();
};

const playRound = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    guesses++;
    let userPick = selectedRadioButton.value;
    let computerPick = getRandomThrow();
    result = checkResult(userPick, computerPick);
    if (result === 'win') wins++;
    else if (result === 'lose') losses++;
    else draws++;
    resultsSpan.textContent = 'You picked ' + userPick + '. Computer picked ' + computerPick + '. You ' + result + '.';
    updateResults();
};

// define DOM utility function
const updateResults = () => {
    guessesSpan.textContent = guesses;
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
};

// add event listeners
guessButton.addEventListener('click', playRound);
resetButton.addEventListener('click', hardReset);
