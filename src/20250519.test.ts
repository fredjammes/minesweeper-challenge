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

function countNeighbourMine(lines: string[], x: number, y: number) {
  let neighbourMineCount = 0;
  if (isMine(lines[y][x + 1])) {
    neighbourMineCount++;
  }
  if (isMine(lines[y][x - 1])) {
    neighbourMineCount++;
  }
  if (lines[y + 1] && isMine(lines[y + 1][x])) {
    neighbourMineCount++;
  }
  return neighbourMineCount;
}

function solveCell(lines: string[], x: number, y: number) {
  if (isMine(lines[y][x])) {
    return '*';
  }
  return countNeighbourMine(lines, x, y);
}

function solveLine(lines: string[], y: number) {
  let result = '';
  let x = 0;
  while (lines[y].length > x) {
    result += solveCell(lines, x, y);
    x++;
  }
  return result;
}

function minesweeper(input: string) {
  const inputLines = input.split('\n');
  const solvedLines = [];
  let y = 0;
  while (y < inputLines.length) {
    solvedLines.push(solveLine(inputLines, y));
    y++;
  }

  return solvedLines.join('\n');
}

describe('20250519', () => {
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
    ['.\n.\n.', '0\n0\n0'],
    ['..\n.', '00\n0'],
    ['*\n*', '*\n*'],
    ['.\n*', '1\n*'],
  ])('', (input, expected) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
