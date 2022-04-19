/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Example 2:
Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Example 3:
Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Example 4:
Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
*/

function isPermutation(str, pattern) {
  let charFrequency = new Array(26).fill(0);
  for (const char of pattern) {
    const charCode = char.charCodeAt() - "a".charCodeAt();
    charFrequency[charCode]++;
  }
  for (const char of str) {
    const charCode = char.charCodeAt() - "a".charCodeAt();
    charFrequency[charCode]--;
  }
  for (num of charFrequency) {
    if (num !== 0) return false;
  }
  return true;
}

function findPermutation(str, pattern) {
  if (str.length < pattern.length) return false;
  for (let start = 0, end = pattern.length; end <= str.length; end++, start++) {
    if (isPermutation(str.substring(start, end), pattern)) return true;
  }
  return false;
}
// Time Complexity O(N*M) with M is pattern length
// Space Complexity O(26)

function findPermutation(str, pattern) {
  let start = 0,
    matched = 0,
    charFrequency = {};
  for (char of pattern) {
    if (!(char in charFrequency)) charFrequency[char] = 0;
    charFrequency[char]++;
  }
  for (end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (endChar in charFrequency) {
      charFrequency[endChar]--;
      if (charFrequency[endChar] === 0) matched++;
    }

    if (matched === Object.keys(charFrequency).length) return true;

    if (end >= pattern.length - 1) {
      const startChar = str[start];
      if (startChar in charFrequency) {
        if (charFrequency[startChar] === 0) matched--;
        charFrequency[startChar]++;
      }
      start++;
    }
  }
  return false;
}
// Time Complexity O(N+M) with M is pattern length
// Space Complexity O(M)

console.log(findPermutation("oidbcaf", "abc"));
console.log(findPermutation("odicf", "dc"));
console.log(findPermutation("bcdxabcdy", "bcdyabcdx"));
console.log(findPermutation("aaacb", "abc"));
