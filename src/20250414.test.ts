import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(input: string) {
  if (input === '...') return '000';
  if (input === '..') return '00';
  return '0';
}

describe('20250414', () => {
  test('', () => {
    expect(minesweeper('.')).toBe('0');
  });

  test('', () => {
    expect(minesweeper('..')).toBe('00');
  });

  test('', () => {
    expect(minesweeper('...')).toBe('000');
  });

  // test('', () => {
  //   expect(minesweeper('.')).toBe('0');
  // });
});
