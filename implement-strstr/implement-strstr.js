/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
     let index = -1;

  if (haystack.includes(needle)) {
    let firstLetter = needle.split(0, 1);
    index = haystack.indexOf(firstLetter);
  }
    
    return index;

};