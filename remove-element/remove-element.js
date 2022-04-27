/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  // 힌트. 투 포인터 이용해보기
  // 양쪽 끝에서부터, nums[left] === val이면 nums[right]로
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  return left;
};