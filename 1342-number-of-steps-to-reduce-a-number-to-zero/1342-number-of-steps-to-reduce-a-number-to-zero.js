/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  let count = 0;

  while (num !== 0) {
    if (num % 2 === 1) {
      num -= 1;
    } else {
      num /= 2;
    }
    ++count;
  }

  return count;
};