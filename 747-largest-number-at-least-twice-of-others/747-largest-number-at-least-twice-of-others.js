/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let index = 0;
    let maxNumber = Math.max(...nums);

    for (let i = 0; i < nums.length; i++) {
        if (maxNumber === nums[i]) {
            index = i;
            continue;
        }

        if (maxNumber < nums[i] * 2) {
            return -1;
        }
    }
    
    return index;
};