/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
const minAge = 18;
const maxAge = 60;
function checkAge(age, name = 'Andrey') {
  if (typeof age === 'number') {
    if (age < minAge) {
      console.log(`You don't have access cause your age is ${age}. It's less then 18 :( `);
    } else if (age >= minAge && age <= maxAge) {
      console.log(`Welcome ${name}!`);
    } else if (age > maxAge) {
      console.log(`Keep calm and look Culture channel`);
    } else {
      console.log(`Technical work`);
    }
  } else {
    if (isNaN(age) || age === null) {
      console.log(`Incorrect data type`);
    } else {
      age = Number(age);
      if (age < minAge) {
        console.log(`You don't have access cause your age is ${age}. It's less then 18 :( `);
      } else if (age >= minAge && age <= maxAge) {
        console.log(`Welcome ${name}!`);
      } else if (age > maxAge) {
        console.log(`Keep calm and look Culture channel`);
      } else {
        console.log(`Technical work`);
      }
    }
  }
}

checkAge(12);
checkAge('55', 'Anatoly');
checkAge('12fg');
checkAge('fg');
// checkAge(undefined);
// checkAge(NaN);
// checkAge(null);
// checkAge(18);
// checkAge(19, 'Anatoly');
// checkAge(59);
// checkAge(60);
// checkAge(150);
