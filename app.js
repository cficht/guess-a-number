import compareNumbers from './compareNumbers.js';

const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');

const triesRemaining = document.getElementById('tries-remaining');
const highLow = document.getElementById('high-low');
const winLose = document.getElementById('win-lose');

const numberToGuess = Math.round(Math.random() * 10);
let triesCount = 4;

submitButton.addEventListener('click', () => {
    const numberUserGuess = Number(numberInput.value);
    let submittedTry = compareNumbers(numberUserGuess, numberToGuess);

    if (submittedTry === 1) {
        triesCount--;
        highLow.textContent = 'How high? Too high!';
    } else if (submittedTry === -1) {
        triesCount--;
        highLow.textContent = 'Too low, bro!';
    } else {
        winLose.textContent = 'YOOOOOOU WIN!!!';
        highLow.textContent = 'The right stuff!';
        submitButton.disabled = true;
    }

    triesRemaining.textContent = triesCount;

    if (triesCount <= 0) {
        winLose.textContent = 'YOOOOU LOSE!!!';
        submitButton.disabled = true;
    }
});