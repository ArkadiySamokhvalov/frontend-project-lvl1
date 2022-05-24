import readlineSync from 'readline-sync';

const INT_MIN = 1;
const INT_MAX = 100;

export const printRules = () => {
    return console.log('Answer "yes" if the number is even, otherwise answer "no"');
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const askQuestion = (number) => {
    return console.log(`Question: ${number}`);
}

const getAnswer = () => {
    const validAnswers = ['yes', 'no'];
    const userAnswer = readlineSync.question('Your answer: ');
    
    if ( !validAnswers.includes(userAnswer) ) {
        printRules();
        return getAnswer();
    } 

    return userAnswer;
}

const checkParity = (number) => {
    return (number % 2 === 0) ? 'yes' : 'no';
}

const checkAnswer = (userAnswer, correctAnswer) => {
    return (userAnswer === correctAnswer);
}

export const playGame = (name, index = 0) => {
    if (index !== 3) {
        const number = getRandomInt(INT_MIN, INT_MAX);

        askQuestion(number);

        const userAnswer = getAnswer();
        const correctAnswer = checkParity(number);

        if ( checkAnswer(userAnswer, correctAnswer)) {
            console.log('Correct!');
            index += 1;
            return playGame(name, index);
        }

        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`)
        return;
    }

    return console.log(`Congratulations, ${name}!`);
}