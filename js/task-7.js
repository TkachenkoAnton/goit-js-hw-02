const filterArray = function (array) {
  const numbers = [];

  // Перебрать массив функции
  for (let i = 0; i < array.length; i += 1) {
    // После перебора проверить, если элемент массива конечное чило добавить его в пустой массив
    if (Number.isFinite(array[i])) {
      numbers.push(array[i]);
    }
  }

  // Вернуть значение массива
  return numbers;
};

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, "100"]));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

// console.log(filterArray([{}, () => {}, 2]));
// [2]
