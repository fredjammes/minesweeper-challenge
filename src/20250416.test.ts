import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function isMine(c: string) {
  return c === '*';
}

function isLeftNeighbourAMine(input: string, index: number) {
  return isMine(input[index - 1]);
}

function isRightNeighbourAMine(input: string, index: number) {
  return isMine(input[index + 1]);
}

function countMineInNeighbourhood(input: string, index: number) {
  let result = 0;
  if (isLeftNeighbourAMine(input, index)) {
    result++;
  }
  if (isRightNeighbourAMine(input, index)) {
    result++;
  }

  return result;
}

function solveCharacter(input: string, index: number) {
  const currentCellValue = input[index];
  if (isMine(currentCellValue))
    return '*';
  return countMineInNeighbourhood(input, index);
}

function minesweeper(input: string) {
  return input.split('').map((_, index) => solveCharacter(input, index)).join('');
}

describe('date', () => {
  test('', () => {
    expect(minesweeper('.')).toBe('0');
  });
  test('', () => {
    expect(minesweeper('..')).toBe('00');
  });
  test('', () => {
    expect(minesweeper('...')).toBe('000');
  });
  test('', () => {
    expect(minesweeper('*')).toBe('*');
  });
  test('', () => {
    expect(minesweeper('**')).toBe('**');
  });
  test('', () => {
    expect(minesweeper('***')).toBe('***');
  });
  test('', () => {
    expect(minesweeper('.*')).toBe('1*');
  });
  test('', () => {
    expect(minesweeper('.*.')).toBe('1*1');
  });
  test('', () => {
    expect(minesweeper('*.*')).toBe('*2*');
  });
});
