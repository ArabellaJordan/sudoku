import { solvedBoard } from "./solution.js";

export function loadBoard() {
  const board = generateBoard();

  const cells = Array.from(document.getElementsByClassName("col"));

  cells.forEach((cell, index) => {
    const row = Math.floor(index / 16);
    const col = index % 16;

    cell.innerHTML = `${board[row]![col]! == 0 ? "" : board[row]![col]!}`;
  });
}

function generateBoard() {
  const solvedBoard = getBoard();
  const validBoard = showFewNumbers(solvedBoard);

  return validBoard;
}

// only show a few numbers
function showFewNumbers(completeBoard: number[][]) {
  const board = completeBoard.map((row) => row.map(() => 0));
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
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

function convertToLetter(number: number): number | string {
  if (number >= 0 && number <= 9) return number;

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  if (number > 16) {
    console.error("Invalid number: greater than 16");
  }
  const letter = letters[number - 10];
  return letter!;
}

function getBoard() {
  return solvedBoard;
}
