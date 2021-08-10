import getRandomNumber from '../random.js';
import startGame from '../index.js';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};
const getArrForGame = () => {
  const gameArr = [];
  const question = getRandomNumber(1, 100);
  const alarm = `Question: ${question}`;
  // console.log(question)
  const answer = isPrime(question) ? 'yes' : 'no';
  // console.log(answer);
  gameArr.push(alarm);
  gameArr.push(answer);
  return gameArr;
};

const playPrime = () => startGame(message, getArrForGame);
export default playPrime;
