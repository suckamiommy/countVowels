// Import
const _vowels = require("../../app/service/countVowels");

// Test case
describe('test count vowels function', () => {
  test('Case 1: a-z (Lower case)', () => {
    expect(_vowels.countVowels("abcdefghijklmnopqrstuvwxyz")).toBe(5);
  });
  test('Case 2: A-Z (Upper case)', () => {
    expect(_vowels.countVowels("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(5);
  });
  test('Case 3: Special character', () => {
    expect(_vowels.countVowels(`!@#$%^&*()_+-/"'\|.,`)).toBe(0);
  });
  test('Case 3: Number', () => {
    expect(_vowels.countVowels(`0123456789`)).toBe(0);
  });
  test('Case 3: lorem ipsum', () => {
    expect(_vowels.countVowels(`lorem ipsum`)).toBe(4);
  });
});