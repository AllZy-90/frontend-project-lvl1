import getRandom from '../utils.js';
import invokeGameFunction from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2) === 0;

const generateRound = () => {
  const randomNumber = getRandom(0, 100);
  const question = randomNumber;
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

// eslint-disable-next-line import/prefer-default-export
export const startGame = () => {
  invokeGameFunction(generateRound, gameRules);
};
