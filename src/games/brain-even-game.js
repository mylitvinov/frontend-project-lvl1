import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

const numberOfRounds = 3;
const message = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const getArrForGame = () => {
    const gameArr = [];
    const question = getRandomNumber(1, 500);
    gameArr.push(question);
    const answer = isEven(question) ? 'yes' : 'no';
    gameArr.push(answer);
    return gameArr;
};
const playEven = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log(message);
    for (let i = 0; i < numberOfRounds; i += 1) {
        const arrForGame = getArrForGame();
        const question = arrForGame[0];
        const answer = arrForGame[1];
        console.log(`Question: ${question}`);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (answer !== playerAnswer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
            return console.log(`Let's try again, ${playerName}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${playerName}!`);
};

export default playEven;
