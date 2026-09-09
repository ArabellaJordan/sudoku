import { solvedBoard } from "./solution.js";
let board: number[][] = [];

export function generateBoard() {
  board = getBoard();

  console.log("board: ", board);
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
