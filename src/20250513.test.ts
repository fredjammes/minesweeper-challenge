import { describe, test, expect } from 'vitest';

function isMine(c: string) {
  return c === '*';
}

function solveChar(c: string, inputAsArray: string[]) {
  if (isMine(c)) {
    return '*';
  }
  return '1';
}

function minesweeper(input: string): string {
  if (input.includes('*')) {
    const inputAsArray = input.split('');
    return inputAsArray.map(c => solveChar(c, inputAsArray)).join('');
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

describe('20250513', () => {
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
});
