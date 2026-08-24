import { describe, expect, it } from "vitest";
import { checkRow } from ".";

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
