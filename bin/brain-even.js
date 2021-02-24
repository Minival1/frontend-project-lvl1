import readlineSync from 'readline-sync';
import promptName from '../src/cli.js';

const defaultName = promptName();

function generateRandomNum() {
    return parseInt(((Math.random() * 30) + 1).toFixed(2));
}

function isEven(num) {
    return num % 2 === 0;
}

function initQuestion(num) {
    console.log(`Question: ${num}`);
}

function getAnswer() {
    return readlineSync.question("Your answer: ");
}

const initEvenGame = (name = defaultName) => {
    let currentAnswer = false;
    let countQuestions = 0;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    do {
        let randomNum = generateRandomNum();
        initQuestion(randomNum);
    
        let answer = getAnswer();
    
        if ((answer === 'yes' && isEven(randomNum)) || (answer === 'no' && !isEven(randomNum))) {
            console.log("Correct!");

            currentAnswer = true;
            countQuestions++;

        } else {
            // сделать правильный вывод ответа
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNum) ? 'yes' : 'no'}'. `);
            console.log(`Let's try again, ${name}!`);

            currentAnswer = false;
        }

    } while (currentAnswer && countQuestions < 3);

    if (countQuestions === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
initEvenGame();