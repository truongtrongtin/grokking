/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function lengthOfLongestSubstring(str, k) {
  let maxLength = 0,
    start = 0,
    frequencyMap = {},
    maxCount = 0;
  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    frequencyMap[endChar] = frequencyMap[endChar]
      ? frequencyMap[endChar] + 1
      : 1;
    maxCount = Math.max(maxCount, frequencyMap[endChar]);
    if (end - start + 1 - maxCount > k) {
      const startChar = str[start];
      frequencyMap[startChar]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Time Complexity O(N)
// Space Complexity O(26)

console.log(lengthOfLongestSubstring("aabccbb", 2));
console.log(lengthOfLongestSubstring("abbcb", 1));
console.log(lengthOfLongestSubstring("abccde", 1));
