import { solvedBoard } from "./solution.js";
let mainBoard: number[][];

export function loadBoard() {
  const board = generateBoard();

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

function generateBoard() {
  const solvedBoard = getBoard();
  mainBoard = showFewNumbers(solvedBoard);

  return mainBoard;
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

export function enterNumber() {
  const cells = document.querySelectorAll<HTMLInputElement>(".col");
  const arrayCells = Array.from(cells);
  arrayCells.forEach((cell, index) => {
    let oldValue = cell.value;
    cell.addEventListener("beforeinput", (event) => {
      oldValue = cell.value;
    });

    cell.addEventListener("input", (event) => {
      cell.value = validateInput(cell.value) ? cell.value : (oldValue ?? 0);

      const rowIndex = Math.floor(index / 16);
      const colIndex = index % 16;

      const cellValue = isNaN(parseInt(cell.value)) ? 0 : parseInt(cell.value);
      mainBoard[rowIndex]![colIndex] = cellValue;
      const row = mainBoard[rowIndex]!;

      const duplicates = findRowDuplicates(row);

      row?.forEach((number, index) => {
        const isIncluded = duplicates.includes(number);
        const cellIndex = 16 * rowIndex + index;

        if (isIncluded) {
          arrayCells[cellIndex]?.classList.add("invalid");
        } else {
          arrayCells[cellIndex]?.classList.remove("invalid");
        }
      });
    });
  });
}
