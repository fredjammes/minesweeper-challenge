import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(input: string) {
  const lines = input.split('\n');
  let result = '';
  lines.forEach((line, index) => {
    result += new Array(line.length).fill('0').join('');
    if (index !== lines.length - 1) {
      result += '\n';
    }
  });
  return result;
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

  test('', () => {
    expect(minesweeper('.\n.')).toBe('0\n0');
  });
});
