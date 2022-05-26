import * as game from '../index.js';

const gameSettings = {
  rules: 'What number is missing in the progression?',
  int_min: 1,
  int_max: 100,
  progression_min: 5,
  progression_max: 10,
};

const getRandomProgression = () => {
  const length = game.getRandomInt(gameSettings.progression_min, gameSettings.progression_max);
  const seed = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  const randProgression = [];

  randProgression[0] = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  for (let i = 1; i < length; i += 1) {
    randProgression[i] = randProgression[i - 1] + seed;
  }

  return randProgression;
};

const hideArrayElem = (array, position) => {
  const newArray = array.slice();

  newArray[position] = '..';

  return newArray;
};

const startGame = (rounds = 0) => {
  if (rounds === 0) game.printText(gameSettings.rules);

  const arithmProgression = getRandomProgression();
  const position = game.getRandomInt(0, arithmProgression.length - 1);
  const gameProgression = hideArrayElem(arithmProgression, position);
  const text = gameProgression.join(' ');

  game.printQuestion(text);

  const userAnswer = Number(game.askAnswer());
  const correctAnswer = Number(arithmProgression[position]);

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
