#!/usr/bin/env node
import { gameInfo, generateRandomNum } from '../src/index.js';

function generateProgression() {
    const lengthProgression = generateRandomNum(5, 10);
    const arithm = generateRandomNum(1, 15);
    const firstNum = generateRandomNum();

    const hideNum = generateRandomNum(0, lengthProgression);

    let correct;

    let operation = "";

    let num = firstNum;

    for (let i = 0; i <= lengthProgression; i++) {


        if (i !== 0) {
            num += arithm;
        }
        
        if (hideNum !== i) {
            operation += `${num} `;
        } else {
            correct = num;
            operation += `.. `;
        }

    }

    return {
        correct: correct.toString(),
        operation
    }
}

const initProgressionGame = () => {

    gameInfo.queryName();

    console.log("What number is missing in the progression?");

    do {

        const progress = generateProgression();

        gameInfo.askQuestion(progress.operation);

        gameInfo.getAnswer();

        if (gameInfo.answer === progress.correct) {
            gameInfo.continueGame();
        } else {
            gameInfo.outputResult(progress.correct);
            gameInfo.finishGame();
        }

    } while (gameInfo.check());

    gameInfo.gameComplete();
}

initProgressionGame();