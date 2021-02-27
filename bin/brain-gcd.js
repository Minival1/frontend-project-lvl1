#!/usr/bin/env node
import { gameInfo, generateRandomNum } from '../src/index.js';

function nod(a, b) {
  let lowest = a < b ? a : b;
  const bigger = a > b ? a : b;
  let ostatok = bigger % lowest;
  let temp = ostatok;

  while (ostatok !== 0) {
    temp = lowest % ostatok;
    lowest = ostatok;
    ostatok = temp;
  }

  return lowest.toString();
}

const initGcdGame = () => {
  gameInfo.queryName();

  console.log('Find the greatest common divisor of given numbers.');

  do {
    const a = generateRandomNum();
    const b = generateRandomNum();

    const correct = nod(a, b);

    gameInfo.askQuestion(`${a} ${b}`);

    gameInfo.getAnswer();

    if (gameInfo.answer === correct) {
      gameInfo.continueGame();
    } else {
      gameInfo.outputResult(correct);
      gameInfo.finishGame();
    }
  } while (gameInfo.check());

  gameInfo.gameComplete();
};

initGcdGame();
