/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
let spliteWord = word.split('');
let counterVowels = 0;
const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';
let counterConsonants = 0;

spliteWord.forEach((element) => {
  if (vowels.includes(element)) {
    counterVowels++;
  }
  if (consonants.includes(element)) {
    counterConsonants++;
  }
});

vowelsAndConsonantsResult = `${word} contains ${counterVowels} vowels and ${counterConsonants} consonants`;

export { vowelsAndConsonantsResult };
