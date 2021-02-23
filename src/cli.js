import readlineSync from 'readline-sync';

const promptName = () => {
    return readlineSync.question('May I have your name? ');
};

export { promptName };
