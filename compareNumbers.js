export default function compareNumbers(guess, correctNumber) {
    if (guess > correctNumber && guess <= 20) {
        return 1;
    } else if (guess < correctNumber) {
        return -1;
    } else if (guess === correctNumber) {
        return 0;
    }

}