/*
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

function hasDuplicate(str) {
  let seen = new Map();
  for (char of str) {
    if (seen.has(char)) return true;
    seen.set(char, true);
  }
  return false;
}

// bruteforce
function nonRepeatSubstring(str) {
  let maxLength = 0;
  for (let start = 0; start < str.length; start++) {
    for (let end = start; end < str.length; end++) {
      if (!hasDuplicate(str.substring(start, end + 1))) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
}
// Time Complexity O(N^3)
// Space Complexity O(26)

function nonRepeatSubstring(str) {
  let maxLength = 0,
    start = 0,
    charIndexMap = new Map();
  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (charIndexMap.has(endChar)) {
      start = Math.max(start, charIndexMap.get(endChar) + 1);
    }
    charIndexMap.set(endChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Time Complexity O(N)
// Space Complexity O(26)

console.log(nonRepeatSubstring("aabccbb"));
console.log(nonRepeatSubstring("abbbb"));
console.log(nonRepeatSubstring("abccde"));
