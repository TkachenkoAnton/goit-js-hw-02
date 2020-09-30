const isLoginValid = function (login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login) ? false : true;
};

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
