/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // split으로 나눈다
    // 공백이 아닌 것들만 추린다
    // reverse()로 반환한다
    // join으로 공백 넣기
    
  return s
    .split(' ')
    .filter((word) => word.length > 0) 
    .reverse()
    .join(' ');
};