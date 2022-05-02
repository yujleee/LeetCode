/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  // 내림차순 정렬
  let sorting = nums.sort((a, b) => b - a);

  // set으로 중복 제거
  let set = new Set(sorting);
    

  if (set.size < 3) return sorting[0];

  return [...set][2];
};
