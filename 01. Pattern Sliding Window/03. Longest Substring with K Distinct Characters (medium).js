/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

// bruteforce
function findLength(str, k) {
  let maxLength = 0;
  for (let start = 0; start < str.length; start++) {
    let seen = new Map();
    for (let end = start; end < str.length; end++) {
      seen.set(str[end], true);
      if (seen.size === k) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
}
// Time Complexity O(N^2)
// Space Complexity O(k)

function findLength(str, k) {
  let maxLength = 0,
    start = 0,
    charFrequency = new Map();
  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (!charFrequency.has(endChar)) charFrequency.set(endChar, 0);
    charFrequency.set(endChar, charFrequency.get(endChar) + 1);
    while (charFrequency.size > k) {
      const startChar = str[start];
      charFrequency.set(startChar, charFrequency.get(startChar) - 1);
      if (charFrequency.get(startChar) === 0) charFrequency.delete(startChar);
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Time Complexity O(N)
// Space Complexity O(k)

console.log(findLength("araaci", 2));
console.log(findLength("araaci", 1));
console.log(findLength("cbbebi", 3));
