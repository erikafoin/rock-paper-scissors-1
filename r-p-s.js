import { getRandomThrow } from './get-random-throw.js';
import { checkResult } from './check-result.js';

const guessButton = document.getElementById('guess-button');
const selectedRadioButton = document.querySelector('input:checked');
const summarySpan = document.getElementById('summary');

const winsCount = document.getElementById('wins-count');
const losesCount = document.getElementById('loses-count');
const drawsCount = document.getElementById('draws-count');
let guessesCount = document.getElementById('guesses-count');
let result = document.getElementById('result');

let totalGuesses = 0;

// define DOM utility function
const updateSpans = () => {
    result.textContent = result;
    correctGuesses.textContent = correctGuesses;
    totalGuessesDisplay.textContent = totalGuesses;
    winsCount.textContent = winsCount;
    losesCount.textContent = losesCount;
    drawsCount.textContent = drawsCount;
    guessesCount.textContent = guessesCount;
};

const roundResult = () => {
    guessesCount++;
    const userPick = selectedRadioButton.value;
    console.log(selectedRadioButton);
    totalGuesses++;
    checkResult(userPick, getRandomThrow());
    updateSpans();
    debugger;
};



// add event listeners
guessButton.addEventListener('click', roundResult);
