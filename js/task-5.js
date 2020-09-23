const checkForSpam = function (message) {
  if (message.toLowerCase().split(" ").includes("sale")) {
    message = true;
  } else if (message.toLowerCase().split(" ").includes("[spam]")) {
    message = true;
  } else {
    message = false;
  }
  return message;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] spam How to earn fast money?")); // true
