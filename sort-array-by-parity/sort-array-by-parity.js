/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    // 배열 1 => filter 짝수인것만
    let even = nums.filter((e) => e % 2 === 0);
    
    // 배열 2 => filter 홀수인것만.
    let odd = nums.filter((e) => e % 2 !== 0);

    // concat으로 합치기     
    return even.concat(odd);
};