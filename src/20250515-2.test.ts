import { describe, expect, test } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(s: string) {
  return '';
}

describe('20250515-2', () => {
  test.each`
    input | expected
    ${''} | ${''}
  `('', ({ input, expected }) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
