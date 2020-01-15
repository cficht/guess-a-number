import compareNumbers from './compareNumbers.js';

const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');

const triesRemaining = document.getElementById('tries-remaining');
const highLow = document.getElementById('high-low');
const winLose = document.getElementById('win-lose');

const numberToGuess = Math.ceil(Math.random() * 20); // used Math.ceil to ensure the number is never zero;
let triesCount = 4;

submitButton.addEventListener('click', () => {
    
    const numberUserGuess = Number(numberInput.value);
    let submittedTry = compareNumbers(numberUserGuess, numberToGuess);
    
    if (submittedTry === 1) {
        triesCount--;
        highLow.textContent = 'Too high, guy!';
        highLow.style.verticalAlign = '10px'; // moves "Too high" text up vertically;
    } else if (submittedTry === -1) {
        triesCount--;
        highLow.textContent = 'Too low, bro!';
        highLow.style.verticalAlign = '-10px'; // moves "Too low" text down vertically;
    } else {
        triesCount--;
        highLow.textContent = 'The right stuff!';
        highLow.style.verticalAlign = '0px'; // restores "High or low" text to vertical center;
        winLose.textContent = 'YOOOOOOU WIN!!!';
        winLose.style.color = 'gold';
        submitButton.disabled = true;
        numberInput.disabled = true;
        triesRemaining.textContent = triesCount;
        return;
    }
    
    triesRemaining.textContent = triesCount;
    triesRemaining.style.fontSize = `${11 + (triesCount * 4)}px`; // makes the tries remaining's font smaller on decrement;

    if (triesCount <= 0) {
        winLose.textContent = 'YOOOOOOU LOSE!!!';
        winLose.style.color = 'red';
        submitButton.disabled = true;
        numberInput.disabled = true;

    }

});