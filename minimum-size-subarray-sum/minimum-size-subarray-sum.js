/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = -1;
  let sum = 0;

  let result = nums.length + 1;

  while (left < nums.length) {
    if (right + 1 < nums.length && sum < target) {
      right++;
      sum += nums[right];
    } else {
      sum -= nums[left];
      left++;
    }
    if (sum >= target) {
      result = Math.min(result, right - left + 1);
    }
  }

  if (result === nums.length + 1) {
    return 0;
  }
    
  return result;
    
};