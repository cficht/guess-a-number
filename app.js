const numberInput = document.getElementById('number-input');
const submitButton = document.getElementById('submit-button');

const triesRemaining = document.getElementById('tries-remaining');
const highLow = document.getElementById('high-low');
const winLose = document.getElementById('win-lose');

const numberGuess = Math.round(Math.random() * 10);
let triesCount = 4;

console.log(numberGuess);