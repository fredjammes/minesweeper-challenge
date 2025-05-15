import { describe, test, expect } from 'vitest';

function isMine(c: string) {
  return c === '*';
}

function countNeighbour(charIndex: number, inputAsArray: string[]) {
  let result = 0;
  if (inputAsArray[charIndex - 1] === '*') {
    result++;
  }
  if (inputAsArray[charIndex + 1] === '*') {
    result++;
  }
  return result;
}

function solveChar(charIndex: number, inputAsArray: string[]) {
  if (isMine(inputAsArray[charIndex])) {
    return '*';
  }
  return countNeighbour(charIndex, inputAsArray);
}

function minesweeper(input: string): string {
  if (input.includes('*')) {
    const inputAsArray = input.split('');
    return inputAsArray.map((_, index) => solveChar(index, inputAsArray)).join('');
  }
  return new Array(input.length).fill('0').join('');
}

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

describe('20250514', () => {
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
    expect(minesweeper('*.')).toBe('*1');
  });
  test('', () => {
    expect(minesweeper('*.*')).toBe('*2*');
  });
  test('', () => {
    expect(minesweeper('.**')).toBe('1**');
  });
});
