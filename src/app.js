'use strict';

// Write your code here
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const question1 = 'Please guess a number';
const question2 = '(must be 4 digits number and each digit is unique number): ';
const error1 = 'Invalid guess.';
const error2 = 'Must be 4 digits number and each digit is unique number.';

rl.question(`${question1} ${question2}`, (answer) => {
  if (checkIsValidUserInput(answer)) {
    const numberGenerated = generateRandomNumber();

    const result = getBullsAndCows(+answer, numberGenerated);

    console.log(`Your guess: ${answer}. Generated number: ${numberGenerated}`);

    console.log(`Your result: `);

    console.log(result);
  } else {
    console.log(`${error1} ${error2}`);
  }

  rl.close();
});
