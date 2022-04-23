/*
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.
*/

function findSubstring(str, pattern) {
  let windowStart = 0,
    matched = 0,
    substrStart = 0,
    minLength = str.length + 1,
    charFrequency = {};

  for (const char of pattern) {
    if (!(char in charFrequency)) {
      charFrequency[char] = 0;
    }
    charFrequency[char]++;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] >= 0) {
        matched++;
      }
    }

    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        substrStart = windowStart;
      }

      const leftChar = str[windowStart];
      windowStart++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--;
        }
        charFrequency[leftChar]++;
      }
    }
  }

  if (minLength > str.length) {
    return "";
  }
  return str.substring(substrStart, substrStart + minLength);
}
// Time Complexity O(N+M) with M is pattern length
// Space Complexity O(M)

console.log(findSubstring("aabdec", "abc"));
console.log(findSubstring("abdabca", "abc"));
console.log(findSubstring("adcad", "abc"));
