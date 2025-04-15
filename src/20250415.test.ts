import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(input: string) {
  return '0';
}

describe('date', () => {
  test('', () => {
    expect(minesweeper('.')).toBe('0');
  });
});
