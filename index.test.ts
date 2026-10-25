import { describe, expect, it } from "vitest";
import {
  disableBoard,
  displayBoard,
  enterNumber,
  findColumnDuplicates,
  findRowDuplicates,
  isBoardFull,
  isGameWon,
} from "./index";

describe("enter number", () => {
  it("if you enter a number in an empty value, that cell holds the value.", () => {
    const board = [
      [0, 2],
      [0, 1],
    ];

    document.body.innerHTML = `
      <div id="board">
        <input class="col" />
        <input class="col" />
        <input class="col" />
        <input class="col" />
      </div>`;

    enterNumber(board);
    const cells = document.querySelectorAll<HTMLInputElement>(".col");
    const cell = cells[2];

    cell.value = "3";
    cell.dispatchEvent(new Event("input"));

    expect(board[1][0]).toBe(3);
  });

  it("if you enter in a cell with an existing value, return an invalid message", () => {
    document.body.innerHTML = `
    <p id="message"></p>`;

    const board = [
      [5, 2],
      [0, 1],
    ];

    document.body.innerHTML = `
      <p id="message"></p>
      <div id="board">
        <input class="col" />
        <input class="col" />
        <input class="col" />
        <input class="col" />
      </div>`;

    enterNumber(board);
    const cells = document.querySelectorAll<HTMLInputElement>(".col");
    const cell = cells[1]!;

    cell.value = "23";
    cell.dispatchEvent(new Event("input"));

    const messageElement =
      document.querySelector<HTMLParagraphElement>("#message");
    const message = messageElement?.textContent;

    expect(message).toBe("Invalid move");
  });
});

describe("isBoardFull", () => {
  it("if the board is full, game is won", () => {
    const board = [
      [1, 2],
      [2, 1],
    ];
    expect(isBoardFull(board)).toBe(true);
  });

  it("if the board is not full, game is not won", () => {
    const board = [
      [1, 2],
      [2, 0],
    ];
    expect(isBoardFull(board)).toBe(false);
  });

  it("if the game is won, you cant make any move", () => {
    const board = [
      [1, 2],
      [2, 1],
    ];

    document.body.innerHTML = `<div id= "board">
      <input class = "col" />
      <input class = "col" />
      <input class = "col" />
    </div>`;

    isGameWon(board);

    const isDisabled =
      document.querySelector<HTMLInputElement>(".col:disabled") !== null;

    expect(isDisabled).toBe(true);
  });

  it("if the game is not won, you can make a move", () => {
    const board = [
      [1, 2],
      [2, 0],
    ];

    document.body.innerHTML = `<div id= "board">
      <input class = "col" />
      <input class = "col" />
      <input class = "col" />
    </div>`;

    isGameWon(board);

    const isDisabled =
      document.querySelector<HTMLInputElement>(".col:disabled") !== null;

    expect(isDisabled).toBe(false);
  });
});

describe("disableBoard", () => {
  it("disable board cells", () => {
    document.body.innerHTML = `<div id= "board">
      <input class = "col" />
      <input class = "col" />
      <input class = "col" />
    </div>`;

    disableBoard();

    const isDisabled =
      document.querySelector<HTMLInputElement>(".col:disabled") !== null;

    expect(isDisabled).toBe(true);
  });
});

describe("findColumnDuplicates", () => {
  it("returns an array of numbers that appears more than once", () => {
    expect(
      findColumnDuplicates([
        [5, 0, 1],
        [5, 2, 0],
        [0, 3, 2],
      ]),
    ).toEqual([5]);
  });

  it("does not treat 0 as duplicate", () => {
    expect(
      findColumnDuplicates([
        [5, 0, 1],
        [5, 0, 6],
        [0, 3, 2],
      ]),
    ).toEqual([5]);
  });

  it("returns empty array when there is no duplicate", () => {
    expect(
      findColumnDuplicates([
        [6, 0, 1],
        [5, 2, 0],
        [0, 3, 2],
      ]),
    ).toEqual([]);
  });
});

describe("findRowDuplicates", () => {
  it("returns an array of numbers that appears more than once", () => {
    expect(findRowDuplicates([5, 3, 5, 2, 8, 10, 1])).toEqual([5]);
  });

  it("does not treat 0 as duplicate", () => {
    expect(findRowDuplicates([1, 1, 0, 5, 11, 15, 0, 0, 0])).toEqual([1]);
  });

  it("returns empty array when there is no duplicate", () => {
    expect(findRowDuplicates([1, 2, 6, 12, 13, 8])).toEqual([]);
  });
});

describe("displayBoard", () => {
  it("displays value in the cell", () => {
    document.body.innerHTML = `<input class="col" />`;

    displayBoard([[5]]);

    const cell = document.querySelector<HTMLInputElement>(".col");
    expect(cell?.value).toBe("5");
  });

  it("displays none in the cell when value is 0", () => {
    document.body.innerHTML = `<input class="col" />`;

    displayBoard([[0]]);

    const cell = document.querySelector<HTMLInputElement>(".col");
    expect(cell?.value).toBe("");
  });
});
