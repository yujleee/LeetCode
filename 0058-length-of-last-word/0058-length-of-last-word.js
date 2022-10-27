/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.split(' ');
  let length = 0;
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i].length !== 0) {
      length = words[i].length;
      return length;
    }
  }
};