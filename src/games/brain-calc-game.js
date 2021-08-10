import getRandomNumber from '../random.js';
import startGame from '../index.js';

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
  gameArr.push(String(res));
  return gameArr;
};

const playCalc = () => startGame(message, getArrForGame);

export default playCalc;
