/*
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

function lengthOfLongestSubstring(nums, k) {
  let maxLength = 0,
    start = 0,
    zeroCount = 0;
  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;
    if (zeroCount > k) {
      if (nums[start] === 0) zeroCount--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Time Complexity O(N)
// Space Complexity O(1)

console.log(lengthOfLongestSubstring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(
  lengthOfLongestSubstring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);
