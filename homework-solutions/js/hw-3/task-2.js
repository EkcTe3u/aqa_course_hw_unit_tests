/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

function conctaination(n) {
  if (1 <= n && n <= 9) {
    console.log(Number(`${n}`) + Number(`${n}${n}`) + Number(`${n}${n}${n}`));
  } else {
    console.log(`n must be between 1 to 9`);
  }
}
// conctaination(2);
