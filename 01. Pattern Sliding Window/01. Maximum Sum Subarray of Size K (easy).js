/*
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/

// bruteforce
function findMaxSumSubArray(k, arr) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let windowSum = 0;
    for (let j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// Time Complexity O(N*K)
// Space Complexity O(1)

function findMaxSumSubArray(k, arr) {
  let maxSum = -Infinity,
    windowSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
}
// Time Complexity O(N)
// Space Complexity O(1)

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2]));
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));
