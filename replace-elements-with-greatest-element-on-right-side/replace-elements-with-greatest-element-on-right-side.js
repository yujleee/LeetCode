/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  const num = arr.length - 1;

  let max = arr[num];

  arr[num] = -1;

  for (let i = num - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(temp, max);
  }

  return arr;
};