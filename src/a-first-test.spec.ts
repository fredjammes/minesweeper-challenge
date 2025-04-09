import { describe, expect, test } from 'vitest'

describe("a first test", () => {
  test('A test that works', () => {
    expect(1+2).toBe(3)
  })

  test('A test that fails', () => {
    expect(1+2).toBe(4)
  });

});
