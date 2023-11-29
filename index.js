/*Length of the longest substring without repeating characters
Given a string str, find the length of the longest substring without repeating characters.

Example:
For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.

For “BBBB” the longest substring is “B”, with length 1.

For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7 */

function getLengthLongestSubstring(letters) {
  let biggestSubstringLength = 0;
  let substringStartIndex = 0;
  let visitedLetters = {};

  function getBiggestStartIndex(currentLetter) {
    return Math.max(substringStartIndex, visitedLetters[currentLetter] + 1);
  }

  function getBiggestLengthSoFar(currentLetterIndex) {
    return Math.max(
      biggestSubstringLength,
      currentLetterIndex - substringStartIndex + 1
    );
  }

  [...letters].forEach((currentLetter, currentLetterIndex) => {
    if (currentLetter in visitedLetters) {
      substringStartIndex = getBiggestStartIndex(currentLetter);
    }
    visitedLetters[currentLetter] = currentLetterIndex;
    biggestSubstringLength = getBiggestLengthSoFar(currentLetterIndex);
  });

  console.log(biggestSubstringLength);
  return biggestSubstringLength;
}

const LETTERS = "ABDEFGABEF";
getLengthLongestSubstring(LETTERS);

module.exports = getLengthLongestSubstring;
