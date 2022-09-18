/*
Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 2:
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
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

function findStringAnagrams(str, pattern) {
  const result = [];
  if (str.length < pattern.length) return false;
  for (let start = 0, end = pattern.length; end <= str.length; end++, start++) {
    if (isPermutation(str.substring(start, end), pattern)) {
      result.push(start);
    }
  }
  return result;
}
// Time Complexity O(N*M) with M is pattern length
// Space Complexity O(26)

function findStringAnagrams(str, pattern) {
  let result = [],
    start = 0,
    matched = 0,
    charFrequency = {};
  for (const char of pattern) {
    if (!(char in charFrequency)) charFrequency[char] = 0;
    charFrequency[char]++;
  }
  for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    if (endChar in charFrequency) {
      charFrequency[endChar]--;
      if (charFrequency[endChar] === 0) matched++;
    }

    if (matched === Object.keys(charFrequency).length) {
      result.push(start);
    }

    if (end >= pattern.length - 1) {
      const startChar = str[start];
      if (startChar in charFrequency) {
        if (charFrequency[startChar] === 0) matched--;
        charFrequency[startChar]++;
      }
      start++;
    }
  }
  return result;
}
// Time Complexity O(N+M) with M is pattern length
// Space Complexity O(M)

console.log(findStringAnagrams("ppqp", "pq"));
console.log(findStringAnagrams("abbcabc", "abc"));
