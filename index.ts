let board: number[][] = [];

function generateSolution() {
  board = initializeBoard();

  const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let updatedSelection: number[];
  for (let row = 0; row < 9; row++) {
    updatedSelection = [...selection];

    for (let col = 0; col < 9; col++) {
      const index = Math.floor(Math.random() * updatedSelection.length);

      board![row]![col] = updatedSelection[index]!;
      updatedSelection.splice(index, 1);
    }
    // console.log("board: ", board);
  }

  //   console.log("check row", checkRow(2, 0));
}

// generate random number between 1 and 9
// function getRandomNumber(): number {
//   const number = Math.floor(Math.random() * 9);
//   return number;
// }

// checks if the row includes the input
export function checkRow(number: number, row: number[]): boolean {
  const exist = row.includes(number);
  return exist;
}

// function generateRow(): number[] {
//   const selection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const row: number[] = [];
//   for (let n = 1; n <= 9; n++) {
//     const index = Math.floor(Math.random() * selection.length);
//     row.push(selection[index]);
//     selection.splice(index, 1);
//   }
//   return row;
// }

function initializeBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

generateSolution();
