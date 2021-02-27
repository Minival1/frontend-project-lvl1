import readlineSync from 'readline-sync';
import promptName from './cli.js';

function generateRandomNum(min = 1, max = 30) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const gameInfo = {
  playGame: false,
  rounds: 0,
  totalRounds: 3,
  answer: null,
  name: null,
  queryName() {
    gameInfo.name = promptName();
    console.log(`Hello, ${gameInfo.name}!`);
  },
  continueGame() {
    console.log('Correct!');
    gameInfo.rounds += 1;
    gameInfo.playGame = true;
  },
  finishGame() {
    gameInfo.rounds = 0;
    gameInfo.playGame = false;
  },
  check() {
    return gameInfo.playGame && gameInfo.rounds < gameInfo.totalRounds;
  },
  outputResult(correctAnswer) {
    console.log(`'${gameInfo.answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. `);
    console.log(`Let's try again, ${gameInfo.name}!`);
  },
  askQuestion(str) {
    console.log(`Question: ${str}`);
  },
  getAnswer() {
    gameInfo.answer = readlineSync.question('Your answer: ');
  },
  gameComplete() {
    if (gameInfo.rounds === gameInfo.totalRounds) {
      console.log(`Congratulations, ${gameInfo.name}!`);
    }
  },
};

export { generateRandomNum, gameInfo };
