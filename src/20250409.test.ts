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
    let result = '';
    input.split('').forEach((char, index) => {
      if (char === '*') {
        result += char;
        return;
      }
      let value = 0;
      if (input[index+1] === '*') {
        value++;
      }

      result += `${value}`;
    })
    return result;
  }

  expect(minesweeper(input)).toBe(expected);
}

describe("20250409", () => {
  test("", () => {
    const input = `.*`;
    const expected = `1*`;
    verifyMineSweeper(input, expected);
  });
  // test("", () => {
  //   const input = `.*.`;
  //   const expected = `1*1`;
  //   verifyMineSweeper(input, expected);
  // });
  // test("", () => {
  //   const input = `.*.*`;
  //   const expected = `1*2*`;
  //   verifyMineSweeper(input, expected);
  // });
  // test("", () => {
  //   const input = ``;
  //   const expected = ``;
  //   verifyMineSweeper(input, expected);
  // });
});
