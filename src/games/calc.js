import * as game from '../index.js';

const gameSettings = {
  rules: 'What is the result of the expression?',
  int_min: 1,
  int_max: 10,
  operators: ['-', '+', '*'],
  operations: {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
  },
};

const getRandomOperation = () => {
  const lastElemIndex = gameSettings.operators.length - 1;
  return gameSettings.operators[game.getRandomInt(0, lastElemIndex)];
};

const getCorrectAnswer = (operator, num1, num2) => gameSettings.operations[operator](num1, num2);

const startGame = (rounds = 0) => {
  if (rounds === 0) game.printText(gameSettings.rules);

  const number1 = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  const number2 = game.getRandomInt(gameSettings.int_min, gameSettings.int_max);
  const operation = getRandomOperation();
  const formula = `${number1} ${operation} ${number2}`;
  game.printQuestion(formula);

  const userAnswer = Number(game.askAnswer());
  const correctAnswer = Number(getCorrectAnswer(operation, number1, number2));

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
