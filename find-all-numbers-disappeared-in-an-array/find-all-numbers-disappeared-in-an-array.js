/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
// 범위에 없는 숫자를 넣을 배열
 let result = [];

// 범위 카운트 변수     
  let range = 1;
    
// nums에 range 인덱스값이 없으면 result에 넣기 
  while (range <= nums.length) {
    if (nums.indexOf(range) === -1) result.push(range);
    range++;
  }

  return result; 
};