const board = [];

function generateSolution() {
  const row = [];
  for (let r = 1; r <= 9; r++) {
    row.push(getRandomNumber());
  }

  console.log("row: ", row);
}

function getRandomNumber() {
  const number = Math.ceil(Math.random() * 9);
  return number;
}

generateSolution();
