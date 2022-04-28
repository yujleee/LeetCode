/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  //includes. 포함하고 있는지? num * 2 나 num / 2 

  const result = arr.filter((num) => arr.includes(num * 2 || num / 2));

  return result;
};