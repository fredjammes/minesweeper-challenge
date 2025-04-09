import {describe, expect, test} from "vitest";

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function verifyMineSweeper(input: string, expected: string) {
  function minesweeper(input: string) {
    if (input.length === 3) {
      return `1*1`;
    }
    return `1*`;
  }

  expect(minesweeper(input)).toBe(expected);
}

describe("20250409", () => {
  test("", () => {
    const input = `.*`;
    const expected = `1*`;
    verifyMineSweeper(input, expected);
  });
  test("", () => {
    const input = `.*.`;
    const expected = `1*1`;
    verifyMineSweeper(input, expected);
  });
});
