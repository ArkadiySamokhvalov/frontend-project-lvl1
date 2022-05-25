import * as game from '../index.js';

const gameSettings = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no"',
  int_min: 1,
  int_max: 100,
};

const getCorrectAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const startGame = (rounds = 0) => {
  if (rounds === 0) game.printText(gameSettings.rules);

  const number = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  game.printQuestion(number);

  const userAnswer = game.askAnswer();
  const correctAnswer = getCorrectAnswer(number);

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
