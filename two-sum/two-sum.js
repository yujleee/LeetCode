/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    const find = map[value];
    if (find !== undefined) return [find, i];
    else map[nums[i]] = i;
  }
};