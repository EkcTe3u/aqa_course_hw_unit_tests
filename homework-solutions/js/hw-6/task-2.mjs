/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

let resultUnique = [];
let resultNull;

function arrayElemToLowCase(array) {
  let lowCaseArray = [];
  array.forEach((elem) => {
    elem = elem.toLocaleLowerCase();
    lowCaseArray.push(elem);
  });
  return lowCaseArray;
}

let competitorPizzasLow = arrayElemToLowCase(competitorPizzas);
let myPizzasT1Low = arrayElemToLowCase(myPizzasT1);
let myPizzasT2Low = arrayElemToLowCase(myPizzasT2);

function checkUniquePizza(myPizza, competitorPizza) {
  let resultUnique = [];
  myPizza.forEach((element) => {
    if (!competitorPizza.includes(element)) {
      let firstLetterToUpperCase = element.charAt(0).toUpperCase() + element.slice(1);
      resultUnique.push(firstLetterToUpperCase);
    }
  });
  if (resultUnique.length === 0) {
    resultNull = null;
    return resultNull;
  } else {
    return resultUnique;
  }
}
resultUnique = checkUniquePizza(myPizzasT1Low, competitorPizzasLow);
resultNull = checkUniquePizza(myPizzasT2Low, competitorPizzasLow);
console.log(resultNull, resultUnique);

export { resultNull, resultUnique };
