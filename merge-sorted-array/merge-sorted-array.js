/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let last1 = m - 1; // 마지막 index;
  let last2 = n - 1;

    // m+n-1 숫자의 총 개수
  for (let i = m + n - 1; i >= 0; i--) {
    if (last2 < 0) break;
    if (nums1[last1] > nums2[last2]) {
      nums1[i] = nums1[last1];
      last1--;
    } else {
      nums1[i] = nums2[last2];
      last2--;
    }
  }
};