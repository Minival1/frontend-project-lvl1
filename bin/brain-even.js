#!/usr/bin/env node
import { gameInfo, generateRandomNum } from '../src/index.js';

function isEven(num) {
  return num % 2 === 0;
}

const initEvenGame = () => {
  gameInfo.queryName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const randomNum = generateRandomNum();

    gameInfo.askQuestion(randomNum);
    gameInfo.getAnswer();

    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    if ((gameInfo.answer === 'yes' && isEven(randomNum))
        || (gameInfo.answer === 'no' && !isEven(randomNum))) {
      gameInfo.continueGame();
    } else {
      gameInfo.outputResult(correctAnswer);
      gameInfo.finishGame();
    }
  } while (gameInfo.check());

  gameInfo.gameComplete();
};

initEvenGame();
