import { describe, expect, it } from "vitest";
import { findRowDuplicates } from "./index";

describe(findRowDuplicates, () => {
  it("returns an array of numbers except 0 that appears more than once", () => {
    expect(findRowDuplicates([5, 3, 5, 2, 8, 10, 1])).toEqual([5]);
  });
});
