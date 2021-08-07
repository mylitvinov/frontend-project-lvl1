import readlineSync from 'readline-sync';

const numberOfRounds = 3;
const startGame = (message, getArrForGame) => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log(message);
    for (let i = 0; i < numberOfRounds; i += 1) {
        const arrForGame = getArrForGame();
        const question = arrForGame[0];
        const answer = arrForGame[1];
        console.log(question);
        const playerAnswer = readlineSync.question('Your answer: ');
        if (answer !== playerAnswer) {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
            return console.log(`Let's try again, ${playerName}!`);
        }
        console.log('Correct!');
    }
    return console.log(`Congratulations, ${playerName}!`);
};

export default startGame;
