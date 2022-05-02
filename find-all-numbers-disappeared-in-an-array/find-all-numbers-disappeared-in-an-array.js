/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // n을 정의하기
  const n = nums.length;

  // range 배열에 1~n까지의 값 넣기
  let result = [];

  let range = 1;
  for (let i = 0; i < n; i++) {
    if (!nums.includes(range)) result.push(range);
    range++;
  }

  return result;    
};