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

function isNeighbourOfAMine(input: string, index: number) {
  return isMine(input[index + 1]) || isMine(input[index - 1]);
}

function solveCharacter(input: string, index: number) {
  const currentCellValue = input[index];
  if (isMine(currentCellValue))
    return '*';
  if (isNeighbourOfAMine(input, index)) {
    return '1';
  }
  return '0';
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
});
