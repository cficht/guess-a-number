// IMPORT MODULES under test here:
import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('guess is lower than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 3;
    const correctNum = 7;

    //Act 
    // Call the function you're testing and set the result to a const

    const runningCompare = compareNumbers(guess, correctNum);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(runningCompare, -1);
});

test('guess is more than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 8;
    const correctNum = 4;

    //Act 
    // Call the function you're testing and set the result to a const

    const runningCompare = compareNumbers(guess, correctNum);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(runningCompare, 1);
});

test('guess is same as the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 5;
    const correctNum = 5;

    //Act 
    // Call the function you're testing and set the result to a const

    const runningCompare = compareNumbers(guess, correctNum);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(runningCompare, 0);
});