const formatString = function (string, maxLength = 40) {
  const arrayLength = string.split("");

  if (arrayLength.length >= maxLength) {
    arrayLength.splice(maxLength, arrayLength.length - 1, "...");
  }

  return arrayLength.join("");
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
