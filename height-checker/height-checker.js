/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  // sort된 새로운 배열
  let sorting = [...heights];
  sorting.sort((x, y) => x - y);

  // for문을 돌면서 일치하지 않으면 count++
  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorting[i]) count++;
  }

  return count;
};