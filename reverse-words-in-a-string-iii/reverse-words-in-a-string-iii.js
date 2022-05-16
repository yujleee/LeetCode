/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let result = s
    .split(' ')
    .filter((word) => word.length > 0)
    .map((e) => {
      return e.split('').reverse().join('');
    })
    .join(' ');
  return result;
};