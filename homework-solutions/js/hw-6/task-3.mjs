/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/

let unique;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
let arraySorted = array.sort((a, b) => a - b);
function deleteDublicates(arrayToSort) {
  let uniqueArray = [];
  for (let i = 0; i < arraySorted.length; i++) {
    if (arraySorted[i] === arraySorted[i + 1]) {
      uniqueArray.push(arraySorted[i]);
    }
  }
  return uniqueArray;
}
unique = deleteDublicates(arraySorted);

export { unique };
