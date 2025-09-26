// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению.
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта
const user = {
  name: 'Gleb',
  age: 12,
};

function getKeyByValue<T extends object, V>(user: T, value: V): keyof T | undefined {
  for (const key in user) {
    if (user[key] === value) {
      return key as keyof T;
    }
  }
  return undefined;
}

console.log(getKeyByValue(user, 'Gleb'));
console.log(getKeyByValue(user, 'Andrey'));
console.log(getKeyByValue(user, 22));
