import getRandomNumber from '../random.js';
import startGame from '../index.js';

const message = 'Find the greatest common divisor of given numbers.';

const toFindGcd = (num1, num2) => {
    if (num2 > num1) {
        toFindGcd(num2, num1);
    }
    if (num2 === 0) return num1;

    return toFindGcd(num2, num1 % num2);
};

const getArrForGame = () => {
    const gameArr = [];
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 15);
    const alarm = `Question: ${num1}  ${num2}`;
    const findGcd = toFindGcd(num1, num2);
     // console.log(findGcd);
    gameArr.push(alarm);
    gameArr.push(String(findGcd));
    return gameArr;
};

const playGCD = () => startGame(message, getArrForGame);

export default playGCD;
