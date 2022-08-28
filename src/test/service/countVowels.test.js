// Import
const _vowels = require("../../app/service/countVowels");

// Test case
describe('test count vowels function', () => {
  // Case: a-z
  test('Case 1: a-z (Lower case)', () => {
    expect(_vowels.countVowels("abcdefghijklmnopqrstuvwxyz")).toBe(5);
  });
  // Case: A-Z
  test('Case 2: A-Z (Upper case)', () => {
    expect(_vowels.countVowels("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(5);
  });
  // Case: Special character
  test('Case 3: Special character', () => {
    expect(_vowels.countVowels(`!@#$%^&*()_+-/"'\|.,`)).toBe(0);
  });
  // Case: Number
  test('Case 3: Number', () => {
    expect(_vowels.countVowels("0123456789")).toBe(0);
  });
  // Case: EN language words
  test('Case 3: EN language words', () => {
    expect(_vowels.countVowels("lorem ipsum")).toBe(4);
  });
  // Case: TH language words
  test('Case 3: TH language words', () => {
    expect(_vowels.countVowels("ทดสอบภาษาไทย")).toBe(0);
  });
});