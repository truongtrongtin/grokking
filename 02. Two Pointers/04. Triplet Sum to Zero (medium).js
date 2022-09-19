/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:

Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let low = i + 1,
      high = nums.length - 1;
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);
        while (nums[low] === nums[low + 1]) low++;
        while (nums[high] === nums[high - 1]) high--;
        low++;
        high--;
      }
      if (sum > 0) high--;
      if (sum < 0) low++;
    }
  }
  return result;
}
// Time Complexity O(NlogN + N^2)
// Space Complexity: depend on sort SC. V8 use timsort which takes O(N)

console.log(JSON.stringify(threeSum([-3, 0, 1, 2, -1, 1, -2])));
console.log(JSON.stringify(threeSum([-5, 2, -1, -2, 3])));
