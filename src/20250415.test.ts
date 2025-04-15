import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function minesweeper(input: string) {
  if (input === '*') return '*';
  if (input === '**') return '**';
  return input.split('').map(_ => '0').join('');
}

describe('date', () => {
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
});
