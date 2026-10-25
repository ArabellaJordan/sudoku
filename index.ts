import { solvedBoard } from "./solution.js";

export function displayBoard(board: number[][]) {
  const cells = Array.from(document.querySelectorAll<HTMLInputElement>(".col"));

  cells.forEach((cell, index) => {
    const row = Math.floor(index / 16);
    const col = index % 16;

    if (board[row]![col]! !== 0) {
      cell.value = `${board[row]![col]!}`;
      cell.disabled = true;
      cell.classList.add("inactive");
    } else {
      cell.value = "";
    }
  });
}

export function loadBoard() {
  const board = generateBoard();
  displayBoard(board);
  enterNumber(board);
}

export function generateBoard(): number[][] {
  const solvedBoard = getBoard();
  const board = showFewNumbers(solvedBoard);

  return board;
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

export function setVersion() {
  const currentVersion = "1";
  const versionElement = document.getElementById("version");

  if (versionElement) {
    versionElement.textContent = currentVersion;
  }
}

function validateInput(input: string) {
  if (input == "" || input == null) return true;

  const hasNonNumbers = !/^\d+$/.test(input);
  if (hasNonNumbers) return false;

  const number = parseInt(input);

  if (number > 0 && number <= 16) {
    return true;
  }
  return false;
}

export function findRowDuplicates(row: number[]): number[] {
  const duplicates = new Set<number>();
  const checked = new Set();

  for (const num of row) {
    if (checked.has(num)) {
      duplicates.add(num);
    } else {
      checked.add(num);
    }
  }

  duplicates.delete(0);
  return [...duplicates];
}

export function updateBoardCell(
  board: number[][],
  rowIndex: number,
  colIndex: number,
  value: number,
) {
  board[rowIndex]![colIndex] = value;
}

// ui change when the input is invalid
export function updateRowInvalidStyles(
  cells: HTMLInputElement[],
  rowIndex: number,
  row: number[],
) {
  const duplicates = findRowDuplicates(row);

  row?.forEach((number, index) => {
    const isIncluded = duplicates.includes(number);
    const cellIndex = 16 * rowIndex + index;
    const cell = cells[cellIndex];

    if (isIncluded) {
      cell?.classList.add("invalid");
    } else {
      cell?.classList.remove("invalid");
    }
  });
}

export function displayError(message: string) {
  const messageElement =
    document.querySelector<HTMLParagraphElement>("#message");

  if (messageElement) {
    messageElement.textContent = message;
  }
}

export function enterNumber(board: number[][]) {
  const cells = document.querySelectorAll<HTMLInputElement>(".col");
  const arrayCells = Array.from(cells);
  arrayCells.forEach((cell, index) => {
    // save old value
    let oldValue = cell.value;
    cell.addEventListener("beforeinput", (event) => {
      oldValue = cell.value;
    });

    cell.addEventListener("input", (event) => {
      // return to old value or 0 if new input is invalid
      const isInputValid: boolean = validateInput(cell.value);
      cell.value = isInputValid ? cell.value : (oldValue ?? 0);

      if (!isInputValid) {
        console.log("Invalid input.");
        displayError("Invalid input");
        return;
      } else {
        displayError("");
      }

      const length = board?.length;
      const rowIndex = Math.floor(index / length);
      const colIndex = index % length;

      const cellValue = isNaN(parseInt(cell.value)) ? 0 : parseInt(cell.value);

      updateBoardCell(board, rowIndex, colIndex, cellValue);

      updateRowInvalidStyles(arrayCells, rowIndex, board[rowIndex]!);

      isGameWon(board);
    });
  });
}

export function isGameWon(board: number[][]) {
  const won = isBoardFull(board);

  if (won) {
    gameWon();
  }
}

export function isBoardFull(board: number[][]): boolean {
  for (let row = 0; row < board.length; row++) {
    const hasZero = board[row]!.includes(0);
    if (hasZero) return false;
  }

  return true;
}

function gameWon() {
  console.log("game is won!");
  disableBoard();
}

export function disableBoard() {
  const board = document.getElementById("board");
  const cells = board?.querySelectorAll("input");

  cells?.forEach((cell) => {
    cell.disabled = true;
  });
}
