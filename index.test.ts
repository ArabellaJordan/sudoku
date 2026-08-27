import { describe, expect, it } from "vitest";
import { checkRow, generateBoard } from "./index.js";

describe("checkRow", () => {
  it("returns true when the number exists in the row", () => {
    const row = [0, 1, 2, 3];
    const result = checkRow(3, row);

    expect(result).toBe(true);
  });

  it("returns false when the number does exists in the row", () => {
    const row = [0, 1, 2, 3];
    const result = checkRow(9, row);

    expect(result).toBe(false);
  });
});

/**
 * Checks if every cell of the board is a number between 1 and 9
 * Checks if the numbers in a row are unique
 * Checks if the numbers in a column are unique
 * Checks if the numbers in a 3x3 box are unique
 */
describe("generateBoard", () => {
  it("returns true if every number in a cell is between 1 and 9", () => {
    const result = generateBoard();

    for (const row of result) {
      for (const cell of row) {
        expect(cell).toBeGreaterThanOrEqual(1);
        expect(cell).toBeLessThanOrEqual(9);
      }
    }
  });
});
