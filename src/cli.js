import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const printName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
