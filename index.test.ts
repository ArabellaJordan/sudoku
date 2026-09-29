import { describe, expect, it } from "vitest";
import { findRowDuplicates } from "./index";

describe(findRowDuplicates, () => {
  it("returns an array of numbers that appears more than once", () => {
    expect(findRowDuplicates([5, 3, 5, 2, 8, 10, 1])).toEqual([5]);
  });

  it("does not treat 0 as duplicate", () => {
    expect(findRowDuplicates([1, 1, 0, 5, 11, 15, 0, 0, 0])).toEqual([1]);
  });
});
