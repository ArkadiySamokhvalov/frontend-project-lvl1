import * as game from '../index.js';

const gameSettings = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  int_min: 1,
  int_max: 100,
};

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;

  if (
    number === 2
    || number === 3
    || number === 5
    || number === 7
    || number === 11
    || number === 13
    || number === 17
    || number === 19
    || number === 23
    || number === 29
  ) return true;

  if (
    number % 2 === 0
    || number % 3 === 0
    || number % 5 === 0
    || number % 7 === 0
    || number % 11 === 0
    || number % 13 === 0
    || number % 17 === 0
    || number % 19 === 0
    || number % 23 === 0
    || number % 29 === 0
  ) return false;

  const bound = Math.sqrt(number);

  let i1 = 31;
  let i2 = 37;
  let i3 = 41;
  let i4 = 43;
  let i5 = 47;
  let i6 = 49;
  let i7 = 53;
  let i8 = 59;

  while (
    i8 <= bound
    && (number % i1)
    && (number % i2)
    && (number % i3)
    && (number % i4)
    && (number % i5)
    && (number % i6)
    && (number % i7)
    && (number % i8)) {
    i1 += 30;
    i2 += 30;
    i3 += 30;
    i4 += 30;
    i5 += 30;
    i6 += 30;
    i7 += 30;
    i8 += 30;
  }

  if (
    i8 <= bound
    || (i1 <= bound && number % i1 === 0)
    || (i2 <= bound && number % i2 === 0)
    || (i3 <= bound && number % i3 === 0)
    || (i4 <= bound && number % i4 === 0)
    || (i5 <= bound && number % i5 === 0)
    || (i6 <= bound && number % i6 === 0)
    || (i7 <= bound && number % i7 === 0)
  ) return false;

  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const startGame = (rounds = 0) => {
  if (rounds === 0) game.printText(gameSettings.rules);

  const number = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  game.printQuestion(number);

  const userAnswer = game.askAnswer();
  const correctAnswer = getCorrectAnswer(number);

  if (game.checkAnswer(userAnswer, correctAnswer)) {
    game.printText(game.globalSettings.success);

    /* eslint-disable no-param-reassign */
    rounds += 1;
    /* eslint-enable no-param-reassign */
  } else {
    game.printText(game.globalSettings.fail(userAnswer, correctAnswer));
    return game.printText(game.globalSettings.loss);
  }

  if (game.checkRoundCount(rounds)) return game.printText(game.globalSettings.win);

  return startGame(rounds);
};

export default startGame;
