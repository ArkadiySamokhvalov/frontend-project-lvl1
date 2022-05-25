import * as game from '../index.js';

const gameSettings = {
  rules: 'Find the greatest common divisor of given numbers.',
  int_min: 1,
  int_max: 10,
};

const getCorrectAnswer = (number1, number2) => {
  if (number2 > number1) return getCorrectAnswer(number2, number1);
  if (!number2) return number1;
  return getCorrectAnswer(number2, number1 % number2);
};

const startGame = (rounds = 0) => {
  if (rounds === 0) game.printText(gameSettings.rules);

  const number1 = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  const number2 = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  const text = `${number1} ${number2}`;
  game.printQuestion(text);

  const userAnswer = Number(game.askAnswer());
  const correctAnswer = Number(getCorrectAnswer(number1, number2));

  if (userAnswer === correctAnswer) {
    game.printText(game.globalSettings.success);

    /* eslint-disable no-param-reassign */
    rounds += 1;
    /* eslint-enable no-param-reassign */

    if (game.checkRoundCount(rounds)) {
      return game.printText(game.globalSettings.win);
    }

    startGame(rounds);
  } else {
    game.printText(game.globalSettings.fail(userAnswer, correctAnswer));
    game.printText(game.globalSettings.loss);
  }

  return null;
};

export default startGame;
