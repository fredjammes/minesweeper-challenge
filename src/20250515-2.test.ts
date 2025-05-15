import { describe, expect, test } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(s: string) {
  let result = '';
  let x = 0;
  if (s.length > x)
    result += '0';
  x++;
  if (s.length > x)
    result += '0';
  x++;
  if (s.length > x)
    result += '0';
  return result;
}

describe('20250515-2', () => {
  test.each`
    input       | expected
    ${''}       | ${''}
    ${'.'}      | ${'0'}
    ${'..'}     | ${'00'}
    ${'...'}    | ${'000'}
  `('', ({ input, expected }) => {
    expect(minesweeper(input)).toBe(expected);
  });
});
