#!/usr/bin/env node

import readlineSync from 'readline-sync';
import promptName from '../src/cli.js';

const defaultName = promptName();

function generateRandomNum() {
  return parseInt(((Math.random() * 30) + 1).toFixed(2));
}

function generateRandomOperation(length) {
  return parseInt(Math.trunc(Math.random() * length));
}

function getAnswer() {
  return readlineSync.question('Your answer: ');
}

function generateQuestion() {
  const operations = ['+', '-', '*'];

  const firstNum = generateRandomNum();
  const secondNum = generateRandomNum();
  const indexOperation = generateRandomOperation(operations.length);

  const operation = `${firstNum} ${operations[indexOperation]} ${secondNum}`;
  const question = `Question: ${operation}`;
  const result = eval(operation);
  return {
    question,
    result,
  };
}

const initCalculateGame = (name = defaultName) => {
  let currentAnswer = false;
  let countQuestions = 0;

  do {
    console.log('What is the result of the expression?');
    const infoQuestion = generateQuestion();

    console.log(infoQuestion.question);

    const answerStr = getAnswer();

    const answerToNum = parseInt(answerStr);

    if (answerToNum === infoQuestion.result) {
      console.log('Correct!');

      currentAnswer = true;
      countQuestions++;
    } else {
      // сделать правильный вывод ответа
      console.log(`'${answerStr}' is wrong answer ;(. Correct answer was '${infoQuestion.result}'. `);
      console.log(`Let's try again, ${name}!`);

      currentAnswer = false;
    }
  } while (currentAnswer && countQuestions < 3);

  if (countQuestions === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

initCalculateGame();
