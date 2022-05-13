/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const length = nums.length;
  const cut = k % length;
  let cutting = nums.splice(length - cut);
  nums.splice(0, 0, ...cutting);
};