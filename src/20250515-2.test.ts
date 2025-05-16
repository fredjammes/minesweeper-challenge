import { describe, expect, test } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function isMine(solvingChar: string) {
  return solvingChar === '*';
}

function solveCell(input: string, x: number) {
  if (isMine(input[x])) {
    return '*';
  }
  if (isMine(input[x + 1])) {
    return '1';
  }
  return '0';
}

function minesweeper(input: string) {
  let result = '';
  let x = 0;
  while (input.length > x) {
    result += solveCell(input, x);
    x++;
  }
  return result;
}

describe('20250515-2', () => {
  test.each([
    ['', ''],
    ['.', '0'],
    ['..', '00'],
    ['...', '000'],
    ['*', '*'],
    ['**', '**'],
    ['***', '***'],
    ['.*', '1*'],
  ])('', (input, expected) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
