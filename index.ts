const board = [];

export default function generateSolution() {
    getRandomNumber();
}

function getRandomNumber() {
  const number = Math.ceil(Math.random() * 9);
  console.log(number);
}
