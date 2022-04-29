/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
 // 배열의 길이가 3보다 작으면 반환한다
  if (arr.length < 3) return false;

  // 좌,우 포인터 하나씩 둔다.
  let left = 0;
  let right = arr.length - 1;

  // 루프 1: 왼쪽부터 오름차순인지 확인
  while (arr[left] < arr[left + 1]) {
      left++;
  }

  // 루프 2: 오른쪽부터 오름차순인지 확인
  while (arr[right] < arr[right - 1]) {
      right--;
  }

  return left === right && left !== 0 && right !== arr.length - 1;
    

};