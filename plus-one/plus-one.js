/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
//   let nums = [...digits];
//   let joinedNumber = BigInt(nums.join(''));
//   joinedNumber++;

//   joinedNumber = joinedNumber.toString();

//   return joinedNumber.split('');
    
    
    for(let i=digits.length-1; i>-1; i--){
        if(digits[i] != 9){
            digits[i]++;
            return digits;
        } else{
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    
    return digits;
};