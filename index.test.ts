import { describe, expect, it } from "vitest";
import {
  disableBoard,
  displayBoard,
  findRowDuplicates,
  isBoardFull,
} from "./index";

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
});

describe("disableBoard", () => {
  it("disable board cells", () => {
    document.body.innerHTML = `<input class = "col" />
    <input class = "col" />
    <input class = "col" />`;
    disableBoard();

    const isDisabled =
      document.querySelector<HTMLInputElement>(".col:disabled") !== null;

    expect(isDisabled).toBe(true);
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
