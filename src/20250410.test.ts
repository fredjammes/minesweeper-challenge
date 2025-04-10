import { describe, expect, test } from 'vitest';

function minesweeper(input: string) {
  if (input === '*') {
    return '*';
  }
  return input.split('').map(c => c === '.' ? '0' : '').join('');
}

describe('20250410', () => {
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

});
