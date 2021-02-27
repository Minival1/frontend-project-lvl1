#!/usr/bin/env node
import { gameInfo, generateRandomNum } from '../src/index.js';

function isPrime(num) {
    
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count += 1;
        }
        if (count > 2) {
            break;
        }
    }

    return count === 2 ? "yes" : "no";

}

const initPrimeGame = () => {

    gameInfo.queryName();

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    do {

        const random = generateRandomNum(1, 100);
        const correct = isPrime(random);

        gameInfo.askQuestion(random);
        gameInfo.getAnswer();

        if (gameInfo.answer === correct) {
            gameInfo.continueGame();
        } else {
            gameInfo.outputResult(correct);
            gameInfo.finishGame();
        }

    } while (gameInfo.check())

    gameInfo.gameComplete();
}

initPrimeGame();