/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let prefix = '';
  let prev = '';
  for (let i = 0; i < strs[0].length; i++) {
    prev = prefix;
    prefix += strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) return prev;
    }
  }

  return prefix;
};