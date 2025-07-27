/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */
const salary = 1000;
let grade;
if (salary >= 1000) {
  grade = 'middle';
  console.log({ grade });
} else {
  grade = 'junior';
  console.log({ grade });
}

const grade2 = salary >= 1000 ? 'middle' : 'junior';
console.log({ grade2 });

function grade3(salary) {
  const grade3 = salary >= 1000 ? 'middle' : 'junior';
  console.log({ grade3 });
}
grade3(999);
