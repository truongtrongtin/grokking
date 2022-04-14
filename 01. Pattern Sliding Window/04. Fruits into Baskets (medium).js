/*
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// bruteforce
function fruitIntoBaskets(fruits) {
  let maxLength = 0;
  for (let start = 0; start < fruits.length; start++) {
    let seen = new Map();
    for (let end = start; end < fruits.length; end++) {
      seen.set(fruits[end], true);
      if (seen.size === 2) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }
  return maxLength;
}
// Time Complexity O(N^2)
// Space Complexity O(1)

function fruitIntoBaskets(fruits) {
  let maxLength = 0,
    start = 0,
    fruitFrequency = new Map();
  for (let end = 0; end < fruits.length; end++) {
    const endFruit = fruits[end];
    if (!fruitFrequency.has(endFruit)) fruitFrequency.set(endFruit, 0);
    fruitFrequency.set(endFruit, fruitFrequency.get(endFruit) + 1);
    while (fruitFrequency.size > 2) {
      const startFruit = fruits[start];
      fruitFrequency.set(startFruit, fruitFrequency.get(startFruit) - 1);
      if (fruitFrequency.get(startFruit) === 0) {
        fruitFrequency.delete(startFruit);
      }
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
// Time Complexity O(N)
// Space Complexity O(1)

console.log(fruitIntoBaskets(["A", "B", "C", "A", "C"]));
console.log(fruitIntoBaskets(["A", "B", "C", "B", "B", "C"]));
