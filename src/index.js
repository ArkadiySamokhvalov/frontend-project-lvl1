import readlineSync from 'readline-sync';

export const globalSettings = {
  introduction: 'Welcome to the Brain Games!',
  greetings: '',
  success: 'Correct!',
  fail: (wrongAnswer, correctAnswer) => `'${wrongAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
  loss: '',
  win: '',
  max_rounds: 3,
};

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const printText = (string) => console.log(string);

const printQuestion = (string) => console.log(`Question: ${string}`);

const askName = () => readlineSync.question('May I have your name?: ');

const askAnswer = () => readlineSync.question('Your answer: ');

const checkAnswer = (userAnswer, correctAnswer) => (userAnswer === correctAnswer);

const checkRoundCount = (rounds) => (rounds === globalSettings.max_rounds);

const init = () => {
  printText(globalSettings.introduction);
  const name = askName();

  globalSettings.greetings = `Hello, ${name}!`;
  globalSettings.loss = `Let's try again, ${name}!`;
  globalSettings.win = `Congratulations, ${name}!`;

  printText(globalSettings.greetings);
};

export {
  init,
  getRandomInt,
  printText,
  printQuestion,
  askAnswer,
  checkAnswer,
  checkRoundCount,
};
