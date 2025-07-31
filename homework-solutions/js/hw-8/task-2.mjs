/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowels = 'aeiou';

function checkVowels(word) {
  let counterVowels = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      counterVowels++;
    }
  }
  return counterVowels;
}

function sortedByVowels(words) {
  let result = [];
  if (words.length === 0) {
    return result;
  }
  {
    const sorted = [...words].sort((a, b) => checkVowels(a) - checkVowels(b));
    return sorted;
  }
}

export { sortedByVowels };
