/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   let nums = [...digits];
  let joinedNumber = BigInt(nums.join(''));
  joinedNumber++;

  joinedNumber = joinedNumber.toString();

  return joinedNumber.split('');
    
};