#!/usr/bin/env node
import { gameInfo, generateRandomNum } from '../src/index.js';

function generateRandomOperation(length) {
  return parseInt(Math.trunc(Math.random() * length));
}

function generateQuestion() {
  const operations = ['+', '-', '*'];

  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();
  const indexOperation = generateRandomOperation(operations.length);

  let result = 0;

  switch(operations[indexOperation]) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
  }

  const operation = `${firstNum} ${operations[indexOperation]} ${secondNum}`;
  return {
    operation,
    result,
  };
}

const initCalculateGame = () => {

  gameInfo.queryName();

  console.log('What is the result of the expression?');

  do {
    const infoQuestion = generateQuestion();

    gameInfo.askQuestion(infoQuestion.operation);

    gameInfo.getAnswer();

    const answer = parseInt(gameInfo.answer);

    if (answer === infoQuestion.result) {
      gameInfo.continueGame();
    } else {
      gameInfo.outputResult(infoQuestion.result);
      gameInfo.finishGame();
    }
  } while (gameInfo.check());

  gameInfo.gameComplete();
};

initCalculateGame();