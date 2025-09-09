// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function callback() {
  console.log('message after 2 seconds');
}

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
delayTwoSeconds(callback);

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const number = new Promise((resolve, _reject) => {
  resolve(1);
});
number.then((result) => console.log(result));

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const reject = new Promise((resolve, reject) => {
  reject('Promise failed');
});
reject.catch((result) => console.log(result));

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((res, rej) => {
    res(number);
  });
}
promiseNumber(4).then((value) => console.log(value));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise.all ${index + 1} === ${result}`);
  });
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise.allSettled ${index + 1} === ${JSON.stringify(result.value)}`);
  });
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function promiseAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(`Try/Catch Promise.all ${index + 1} === ${result}`);
    });
  } catch (error) {
    console.error(error);
  }
}
promiseAll();

async function promiseAllSettled() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(`Try/Catch Promise.allSettled ${index + 1} === ${JSON.stringify(result.value)}`);
    });
  } catch (error) {
    console.error(error);
  }
}
promiseAllSettled();
