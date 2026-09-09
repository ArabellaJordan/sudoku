import { solvedBoard } from "./solution.js";
let board: number[][] = [];

export function generateBoard() {
  const solvedBoard = getBoard();
  const validBoard = showFewNumbers(solvedBoard);

  console.log("board: ", validBoard);

  return board;
}

// only show a few numbers
function showFewNumbers(completeBoard: number[][]) {
  const board = completeBoard.map((row) => row.map(() => 0));
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const showNumber = Math.random() < 0.3;
      if (showNumber) {
        board[row]![col] = completeBoard[row]![col]!;
      }
    }
  }

  return board;
}

function existInColumn(number: number, column: number[]) {
  const exist = column.includes(number);
  return exist;
}

// checks if the row includes the input
export function checkRow(number: number, row: number[]): boolean {
  const exist = row.includes(number);
  return exist;
}

function getBoard() {
  return solvedBoard;
}

generateBoard();
