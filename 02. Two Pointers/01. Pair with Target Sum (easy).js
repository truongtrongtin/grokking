/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Example 2:

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

// Bruteforce
function pairWithTargetSum1(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === targetSum) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
}
// Time Complexity O(N^2)
// Space Complexity O(1)

// Hash table (also works with unsorted array)
function pairWithTargetSum2(nums, targetSum) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const another = targetSum - nums[i];
    if (another in seen) {
      return [seen[another], i];
    }
    seen[nums[i]] = i;
  }
  return [-1, -1];
}
// Time Complexity O(N)
// Space Complexity O(N)

// Two sum (only works with sorted array)
function pairWithTargetSum3(nums, targetSum) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const currentSum = nums[left] + nums[right];
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (currentSum > targetSum) {
      right--;
    }
    if (currentSum < targetSum) {
      left++;
    }
  }
  return [-1, -1];
}
// Time Complexity O(N)
// Space Complexity O(1)

console.log(pairWithTargetSum3([1, 2, 3, 4, 6], 6));
console.log(pairWithTargetSum3([2, 5, 9, 11], 11));
