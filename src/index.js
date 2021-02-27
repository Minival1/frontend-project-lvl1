import readlineSync from 'readline-sync';
import promptName from '../src/cli.js';

function generateRandomNum(min = 1, max = 30) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const gameInfo = {
    playGame: false,
    rounds: 0,
    totalRounds: 3,
    answer: null,
    name: null,
    queryName() {
        this.name = promptName();
        console.log(`Hello, ${this.name}!`);
    },
    continueGame() {
        console.log('Correct!');
        this.rounds += 1;
        this.playGame = true;
    },
    finishGame() {
        this.rounds = 0;
        this.playGame = false;
    },
    check() {
        return this.playGame && this.rounds < this.totalRounds;
    },
    outputResult(correctAnswer) {
        console.log(`'${this.answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. `);
        console.log(`Let's try again, ${this.name}!`);
    },
    askQuestion(str) {
        console.log(`Question: ${str}`);
    },
    getAnswer() {
        this.answer = readlineSync.question('Your answer: ');
    },
    gameComplete() {
        if (this.rounds === this.totalRounds) {
            console.log(`Congratulations, ${this.name}!`);
        };
    }
}

export { generateRandomNum, gameInfo };

