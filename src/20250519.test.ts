import { describe, expect, test } from 'vitest';

// .*.**.\n....*.\n..*...
// gives
// 1*2**2\n1234*2\n01*211

function isMine(solvingChar: string) {
  return solvingChar === '*';
}

function countNeighbourMine(lines: string[], x: number, y: number) {
  let neighbourMineCount = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (lines[y + i] && isMine(lines[y + i][x + j])) {
        neighbourMineCount++;
      }
    }
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
    ['*\n.', '*\n1'],
    ['*.\n..', '*1\n11'],
    ['.*\n..', '1*\n11'],
    ['..\n*.', '11\n*1'],
    ['..\n.*', '11\n1*'],
    ['.*.**.\n....*.\n..*...', '1*2**2\n1234*2\n01*211'],
  ])('', (input, expected) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
