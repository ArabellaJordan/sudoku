const board = [];

function generateSolution() {}

// generate random number between 1 and 9
// function getRandomNumber(): number {
//   const number = Math.floor(Math.random() * 9);
//   return number;
// }

function generateRow(): number[] {
  const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const row: number[] = [];
  for (let n = 1; n <= 9; n++) {
    const index = Math.floor(Math.random() * selection.length);
    row.push(selection[index]);
    selection.splice(index, 1);
  }

  console.log("row: ", row);
  return row;
}

// generateSolution();
generateRow();
