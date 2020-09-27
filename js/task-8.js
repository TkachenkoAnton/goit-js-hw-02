const reduceArray = function (array) {
  // Объявить переменную для подсчета суммы элементов массива
  let total = 0;

  // С помощью цикла фор перебрать массив
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    // Посчитать сумму всех элементов массива
    total += element;
  }

  // Вернуть значение суммы элементов массив
  return total;
};

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
