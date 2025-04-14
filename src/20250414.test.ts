import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(input: string) {
  return new Array(input.length).fill('0').join('');
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

  test('', () => {
    expect(minesweeper('......')).toBe('000000');
  });

  // test('', () => {
  //   expect(minesweeper('.')).toBe('0');
  // });
});
