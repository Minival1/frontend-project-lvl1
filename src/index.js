import readlineSync from 'readline-sync';
import promptName from '../src/cli.js';

function generateRandomNum() {
    return parseInt(((Math.random() * 30) + 1).toFixed(2));
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

