const board: number[][] = [];

function generateSolution() {
  board.push(generateRow());

  console.log("check row", checkRow(2, 0));
  console.log("board: ", board);
}

// generate random number between 1 and 9
// function getRandomNumber(): number {
//   const number = Math.floor(Math.random() * 9);
//   return number;
// }

// checks if the row includes the input
function checkRow(number: number, row: number): boolean {
  const exist = board[row].includes(number);
  return exist;
}

function generateRow(): number[] {
  const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const row: number[] = [];
  for (let n = 1; n <= 9; n++) {
    const index = Math.floor(Math.random() * selection.length);
    row.push(selection[index]);
    selection.splice(index, 1);
  }
  return row;
}

generateSolution();
