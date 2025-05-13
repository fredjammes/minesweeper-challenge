import { describe, test, expect } from 'vitest';

function minesweeper(input: string): string {
  if (input === '..') {
    return '00';
  }
  return '0';
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

  test('2', () => {
    expect(minesweeper('..')).toBe('00');
  });
});
