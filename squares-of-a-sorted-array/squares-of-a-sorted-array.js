/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    
    let result = nums.sort((a,b) => a - b);
    
    return result;
};

// O(n) ? 