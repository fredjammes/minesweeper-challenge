import { describe, test, expect } from 'vitest';

function minesweeper(input: string): string {
  return '0';
}

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

describe('minesweeper', () => {
  test('', () => {
    expect(minesweeper('.')).toBe('0');
  });
});
