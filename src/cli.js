import readlineSync from 'readline-sync';

const promptName = () => readlineSync.question('May I have your name? ');

export default promptName;
