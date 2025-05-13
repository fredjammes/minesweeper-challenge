import { describe, test, expect } from 'vitest';

function minesweeper(input: string): string {
  return ".";
}

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

describe('minesweeper', () => {
  test('returns "." for input "."', () => {
    expect(minesweeper(".")).toBe(".");
  });
});

describe('date', () => {
  test('', () => {

  });
});
