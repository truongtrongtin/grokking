/*
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

// bruteforce
function findMinSubArray(S, arr) {
  let minLength = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum >= S) {
        minLength = Math.min(minLength, j - i + 1);
      }
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
// Time Complexity O(N^2)
// Space Complexity O(1)

function findMinSubArray(S, arr) {
  let minLength = Infinity,
    windowSum = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    while (windowSum >= S) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}
// Time Complexity O(N)
// Space Complexity O(1)

console.log(findMinSubArray(7, [2, 1, 5, 2, 3, 2]));
console.log(findMinSubArray(7, [2, 1, 5, 2, 8]));
console.log(findMinSubArray(8, [3, 4, 1, 1, 6]));
