import { describe, expect, test } from 'vitest';

function minesweeper(input: string) {
  if (input === '.') return '0';
  return '00';
}

describe('20250410', () => {
  test('', () => {
    expect(minesweeper('.')).toBe('0');
  });
  test('', () => {
    expect(minesweeper('..')).toBe('00');
  });
});
