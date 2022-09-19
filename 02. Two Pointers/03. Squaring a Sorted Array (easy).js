/*
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]
*/

function makeSquare(nums) {
  let left = 0,
    right = nums.length - 1,
    squares = [],
    index = nums.length - 1;
  while (left <= right) {
    const squareLeft = nums[left] ** 2;
    const squareRight = nums[right] ** 2;
    if (squareLeft > squareRight) {
      squares[index] = squareLeft;
      left++;
    } else {
      squares[index] = squareRight;
      right--;
    }
    index--;
  }
  return squares;
}
// Time Complexity O(N)
// Space Complexity O(N)

console.log(makeSquare([-2, -1, 0, 2, 3]));
console.log(makeSquare([-3, -1, 0, 1, 2]));
