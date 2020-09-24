// Мое решение

const checkForSpam = function (message) {
  if (message.toLowerCase().includes("sale")) {
    message = true;
  } else if (message.toLowerCase().includes("spam")) {
    message = true;
  } else {
    message = false;
  }

  return message;
};

// Решение ментора GoIT

// function checkForSpam(str) {

//   return str.toLowerCase().includes("spam") ||
//     str.toLowerCase().includes("sale")
//     ? true
//     : false;
// }

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
