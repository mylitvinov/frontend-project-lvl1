import readlineSync from 'readline-sync';
import getRandomNumber from '../random.js';

const numberOfRounds = 3;
const message = 'What is the result of the expression?.';

const arrSigns = ['+', '*', '-'];

const getArrForGame = () => {
    const gameArr = [];
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 10);
    const sign = arrSigns[getRandomNumber(0, 2)];

    const alarm = `Question: ${num1} ${sign} ${num2}`;
    let res = 0;
    if (sign === '+') res = num1 + num2;
    else if (sign === '-') res = num1 - num2;
    else res = num1 * num2;
    gameArr.push(alarm);
    gameArr.push(res);
    return gameArr;
};

const playCalc = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log(message);
    for (let i = 0; i < numberOfRounds; i += 1) {
        const arrForGame = getArrForGame();
        const question = arrForGame[0];
        const answer = arrForGame[1];
        console.log(question);
        const playerAnswer = +readlineSync.question('Your answer: ');
        if (answer !== playerAnswer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
            return console.log(`Let's try again, ${playerName}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${playerName}!`);
};

export default playCalc;
