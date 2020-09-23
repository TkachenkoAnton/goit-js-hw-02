const findLongestWord = function (string = " ") {
  const arrayWords = string.split(" ");
  let longestWord = arrayWords[0].length;

  for (const arrayWord of arrayWords) {
    const arrayWordlength = arrayWord.length;
    if (longestWord < arrayWordlength) {
      longestWord = arrayWord.length;
    }
  }

  return `${longestWord}`;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
