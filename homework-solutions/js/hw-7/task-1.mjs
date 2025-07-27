/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
const firstArray = [1, 2];
const secondArray = [3, 4];
const thirdArray = [5, 6];
let mergeResult;
function mergeArrays(...arg) {
  mergeResult = [].concat(...arg);
  return mergeResult;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
const sentence = 'I am super engineer';
function devideBy(sentence) {
  let replaceSentence = sentence.replace(/\s+/g, ' ').trim();
  let splitedSentence = replaceSentence.split(' ');
  let allLowCase = [];
  let newCaseSentence = [];

  splitedSentence.forEach((element) => {
    element = element.toLowerCase();
    allLowCase.push(element);
  });

  allLowCase.forEach((element, index) => {
    if (index === 0) {
      element = element.charAt(0).toLowerCase() + element.slice(1);
      newCaseSentence.push(element);
    } else {
      element = element.charAt(0).toUpperCase() + element.slice(1);
      newCaseSentence.push(element);
    }
  });
  const resultSentence = newCaseSentence.join('_');
  return resultSentence;
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let array = [0, 1];
  for (let i = 0; i < n; i++) {
    let newIndex = array[i] + array[i + 1];
    array.push(newIndex);
  }
  return array[n];
}

export { mergeArrays, fibonacci, devideBy };
