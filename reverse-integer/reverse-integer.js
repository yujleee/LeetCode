/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x < 0) return -1 * reverse(-x);
  const num = parseInt(
    Array.from(x + '')
      .reverse()
      .join(''),
    10
  );
  if (num > 2 ** 31 - 1) return 0;
  return num;
};