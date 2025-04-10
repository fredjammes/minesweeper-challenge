import { describe, expect, test } from 'vitest';

function minesweeper(input: string) {
  return input.split('').map(c => {
    if (input.includes('*')) {
      return '*';
    }
    return '0';
  }).join('');
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
  test('', () => {
    expect(minesweeper('**')).toBe('**');
  });
  test('', () => {
    expect(minesweeper('***')).toBe('***');
  });

});
