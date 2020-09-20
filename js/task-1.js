const getItemsString = function (array) {
  let result = " ";
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    const number = [i + 1];
    result = `${number} - ${item}`;
  }
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
/*
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

console.log(getItemsString([5, 10, 15]));
/*
'1 - 5
2 - 10
3 - 15
'
*/
