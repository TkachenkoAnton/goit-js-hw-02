const findLongestWord = function (string = " ") {
  const arrayWords = string.split(" ");
  let longestWord = " ";

  for (const arrayWord of arrayWords) {
    if (arrayWord.length > arrayWords[0].length) {
      longestWord = arrayWord;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
