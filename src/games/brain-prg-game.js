import getRandomNumber from '../random.js';
import startGame from '../index.js';

const message = 'What is the result of the expression?.';

const getArrForGame = () => {
    const gameArr = [];
    const prgArr = [];
    const stepRandom = getRandomNumber(2, 6);
    const numFirst = getRandomNumber(1, 20);
    const randPosition = getRandomNumber(0, 6);
    let res = 0;
    for (let i = 0; i < 7; i += 1) {
        if (i === randPosition) res = numFirst + i * stepRandom;
        prgArr[i] = numFirst + i * stepRandom;
        if (prgArr[i] === res) prgArr[i] = '..';
    }
    // console.log(prgArr);
    // console.log(res);
    const alarm = `Question: ${prgArr.join(' ')}`;
    // console.log(alarm);
    gameArr.push(alarm);
    gameArr.push(String(res));
    return gameArr;
};

const playPrg = () => startGame(message, getArrForGame);

export default playPrg;
