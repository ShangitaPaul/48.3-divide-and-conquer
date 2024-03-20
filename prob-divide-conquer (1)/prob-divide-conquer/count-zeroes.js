function CountZeroes(arr) {
  let firstZero = FindFirst(arr);
  if (firstZero === -1) return 0;

  return arr.length - firstZero;
}

/**
 * Finds the index of the first occurrence of 0 in a sorted array of 0s and 1s.
 *
 * @param {number[]} arr - The sorted array of 0s and 1s.
 * @param {number} [low=0] - The starting index of the array (default is 0).
 * @param {number} [high=arr.length - 1] - The ending index of the array (default is arr.length - 1).
 * @returns {number} - The index of the first occurrence of 0, or -1 if 0 is not found.
 */
function FindFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    }
    if (arr[mid] === 1) {
      return FindFirst(arr, mid + 1, high);
    }
    return FindFirst(arr, low, mid - 1);
  }
  return -1;
}

console.log(CountZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(CountZeroes([1, 1, 1, 1])); // 0
console.log(CountZeroes([0, 0, 0])); // 3
console.log(CountZeroes([1, 0, 0, 0, 0])); // 4

// Time complexity: O(log n)

module.exports = CountZeroes;