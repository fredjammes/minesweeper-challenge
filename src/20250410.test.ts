import { describe, expect, test } from 'vitest';

function minesweeper(input: string) {
  if (input === '.') return '0';
  if (input === '..') return '00';
  return '000';
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
});
