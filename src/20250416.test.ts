import { describe, test, expect } from 'vitest';

// .*.**.
// ....*.
// ..*...
// gives
// 1*2**2
// 1234*2
// 01*211

function isMine(c: string) {
  return c === '*';
}

function isLeftNeighbourAMine(input: string, index: number) {
  const currentPosition = getPosition(index, input);
  const leftNeighbourPosition = {
    x: currentPosition.x - 1,
    y: currentPosition.y,
  };
  return isMine(getCellValue(input, index - 1));
}

function isRightNeighbourAMine(input: string, index: number) {
  return isMine(getCellValue(input, index + 1));
}

function countMineInNeighbourhood(input: string, index: number) {
  let result = 0;
  if (isLeftNeighbourAMine(input, index)) {
    result++;
  }
  if (isRightNeighbourAMine(input, index)) {
    result++;
  }

  return result;
}

function getCellValue(input: string, index: number) {
  return input[index];
}

function solveCharacter(input: string, index: number) {
  // const inputLines = input.split('\n');
  // const inputAs2DArray = inputLines.map(line => line.split(''));
  if (isMine(getCellValue(input, index)))
    return '*';
  return countMineInNeighbourhood(input, index);
}

function minesweeper(input: string) {
  return input.split('').map((_, index) => solveCharacter(input, index)).join('');
}

function getPosition(fromIndex: number, inString: string): { x: number; y: number; } {
  let x = 1;
  let y = 1;
  const lines = inString.split('\n');

  while (!isLastLine()) {
    if (!isLastLine()) {
      y++;
    }
  }

  while (!isLastCharOfLine()) {
    if (x >= getCurrentLine().length) {
      x = 1;
    } else {
      x++;
    }
  }
  return { x, y };

  function isLastCharOfLine() {
    return x === getCurrentLine().length;
  }

  function isLastLine() {
    return y === lines.length;
  }

  function getCurrentLine() {
    return lines[y - 1];
  }
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
  test('', () => {
    expect(minesweeper('***')).toBe('***');
  });
  test('', () => {
    expect(minesweeper('..**.*.*.')).toBe('01**2*2*1');
  });
  test('', () => {
    expect(minesweeper('**.*.*.')).toBe('**2*2*1');
  });
  // test('', () => {
  //   const input =
  //     '*\n' +
  //     '.';
  //   const expected =
  //     '*\n' +
  //     '1';
  //   expect(minesweeper(input)).toBe(expected);
  // });
});
