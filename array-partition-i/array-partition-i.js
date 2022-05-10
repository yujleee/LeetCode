/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  let pair = [];

  // 쌍을 담을 2차원 배열 만들기
  for (let i = 0; i < nums.length / 2; i++) {
    pair[i] = [];
  }

  // 배열을 정렬하기
  let sorted = nums.sort((a, b) => a - b);

  let sum = 0;

  sorted.map((ele, i) => {
    if (i % 2 === 0) sum += ele;
  });

  return sum;   
};