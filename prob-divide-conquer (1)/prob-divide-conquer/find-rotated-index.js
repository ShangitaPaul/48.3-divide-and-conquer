//finds the index of a given number in a rotated sorted array. It uses a helper function binarySearch for binary search and another helper function findPivot to find the pivot index in the rotated array.

function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr);
  if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
    return binarySearch(arr, num, 0, pivot - 1);
  } else {
    return binarySearch(arr, num, pivot, arr.length - 1);
  }
}

function binarySearch(arr, num, low, high) {
  if (high < low) return -1;
  let mid = Math.floor((low + high) / 2);
  if (num === arr[mid]) {
    return mid;
  } else if (num < arr[mid]) {
    return binarySearch(arr, num, low, mid - 1);
  } else {
    return binarySearch(arr, num, mid + 1, high);
  }
}

/**
 * Finds the pivot index in a rotated array.
 * @param {number[]} arr - The rotated array.
 * @returns {number} - The index of the pivot element.
 */
function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1;
    else {
      if (arr[low] <= arr[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
}

module.exports = findRotatedIndex;
