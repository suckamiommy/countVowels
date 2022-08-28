/**
 * Function count vowels in words
 * @param { string } str: words 
 * @returns { number } number of vowels
 */
const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter.toLowerCase())).length;

module.exports = { countVowels };