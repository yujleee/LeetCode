/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

 if (nums.length === 0) return 0;

  // 투 포인터 사용해보기.
  let count = 0; // 또 다른 포인터 
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) { 
      nums[count] = nums[i];
      count++;
    }
  }

  return count;    
    
   
//  splice 써보기     
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     } else continue;
//   }

//   return nums.length;    
};