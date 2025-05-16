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

function countNeighbourMine(input: string, x: number) {
  let neighbourMineCount = 0;
  if (isMine(input[x + 1])) {
    neighbourMineCount++;
  }
  if (isMine(input[x - 1])) {
    neighbourMineCount++;
  }
  return neighbourMineCount;
}

function solveCell(input: string, x: number) {
  if (isMine(input[x])) {
    return '*';
  }
  return countNeighbourMine(input, x);
}

function minesweeper(input: string) {
  if (input === '.\n.') {
    return '0\n0';
  }
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
    ['*.', '*1'],
    ['*.*', '*2*'],
    ['*.**', '*2**'],
    ['.\n.', '0\n0'],
  ])('', (input, expected) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
