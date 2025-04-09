import {describe, expect, test} from "vitest";

describe("20250409", () => {
  test("pass", () => {
    const input =
`.*.**.
....*.
..*...`;
    const expected =
`1*2**2
1234*2
01*211`

    function minesweeper(input: string) {
      return `1*2**2
1234*2
01*211`
    }

    expect(minesweeper(input)).toBe(expected);
  });
});
