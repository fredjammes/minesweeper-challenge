import { describe, expect, test } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(s: string) {
  if (s.length === 0)
    return '';
  return '0';
}

describe('20250515-2', () => {
  test.each`
    input   | expected
    ${''}   | ${''}
    ${'.'}  | ${'0'}
  `('', ({ input, expected }) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
