const isLoginValid = function (login, min = 4, max = 16) {
  // Вернуть логин если количество его символов больше или равняется значению минимальной длинны и меньше или равняеться максимальной длинне
  return login.length >= min && login.length <= max;
};

// Вернуть falce если login уже есть в массиве allLogins и вернуть true если login нет в массиве allLogins
const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login) ? false : true;
};

// Проверить проходит ли login валидацию на количество символов, если его в массиве нет вернуть сообщение ERROR.
// После чего валидация на наличие login в массиве alllogins, если он в массиве есть вернуть сообщение REFUSAL.
// Когда login прошел 2 валидации добавить его к массиву allLogins и вернуть сообщение SUCCESS.
const addLogin = function (allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) {
    return (message = ERROR);
  }
  if (!isLoginUnique(allLogins, login)) {
    return (message = REFUSAL);
  }
  allLogins.push(login);
  return (message = SUCCESS);
};

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
