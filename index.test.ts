import { describe, expect, it } from "vitest";
import { displayBoard, findRowDuplicates } from "./index";

describe(findRowDuplicates, () => {
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

describe(displayBoard, () => {
  it("displays value in the cell", () => {
    document.body.innerHTML = `<input class="col" />`;

    displayBoard([[5]]);

    const cell = document.querySelector<HTMLInputElement>(".col");
    expect(cell?.value).toBe("5");
  });
});
