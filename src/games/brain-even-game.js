import getRandomNumber from '../random.js';
import startGame from '../index.js';

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

const playEven = () => startGame(message, getArrForGame);
export default playEven;
