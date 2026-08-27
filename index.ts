let board: number[][] = [];

export function generateBoard() {
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
  }
  console.log(board);
  return board;
}

// checks if the row includes the input
export function checkRow(number: number, row: number[]): boolean {
  const exist = row.includes(number);
  return exist;
}

function initializeBoard() {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
}

generateBoard();
