/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i -= 2) {
  evenNumbersResult = evenNumbersResult + `-${i}`;
}
evenNumbersResult = evenNumbersResult.replace('-', '');
console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let smile = ':)';
let smileString = '';
let smileStringResult = '';
for (let i = 0; i < 5; i++) {
  smileString += smile;
  smileStringResult += `${smileString}\n`;
}
smilePatternResult = smileStringResult.trimEnd();

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
let replaceText = text.replaceAll(' ', 1);
replaceSpacesWithOneResult = replaceText;

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
