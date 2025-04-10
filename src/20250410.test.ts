import { describe, expect, test } from 'vitest';

function minesweeper(input: string) {
  return input.split('').map((c, index) => {
    if (!input.includes('*')) {
      return '0';
    }
    if (c === '*')
      return '*';

    let value = 0;
    if (input[index - 1] === '*' && input[index + 1] === '*') {
      return '2';
    }
    return '1';
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

  test('', () => {
    expect(minesweeper('.*')).toBe('1*');
  });

  test('', () => {
    expect(minesweeper('*.*')).toBe('*2*');
  });
});
