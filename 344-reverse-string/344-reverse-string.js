/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let right = s.length - 1;

  for (let i = 0; i < right; i++) {
    let temp = s[i];
    s[i] = s[right];
    s[right] = temp;
    right--;
  }

  return s;    
};