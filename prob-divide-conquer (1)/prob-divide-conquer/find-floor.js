/**
 * The function `findFloor` in JavaScript finds the largest number in a sorted array that is less than
 * or equal to a given number.
 * @param arr - An array of numbers in ascending order.
 * @param num - The `num` parameter in the `findFloor` function represents the number for which we want
 * to find the largest number in the array that is less than or equal to `num`. The function uses a
 * binary search algorithm to efficiently find this number in a sorted array.
 * @param [low=0] - The `low` parameter represents the lowest index in the array that we are currently
 * considering in the binary search algorithm. It is initially set to 0, which is the lowest index of
 * the array.
 * @param [high] - The `high` parameter in the `findFloor` function represents the highest index in the
 * array `arr` that we are currently considering for finding the floor value of `num`. It is initially
 * set to `arr.length - 1`, which is the index of the last element in the array.
 * @returns The `findFloor` function is returning the floor value of a given number in a sorted array.
 * If the number is found in the array, it returns the number itself. If the number is smaller than the
 * smallest element in the array, it returns -1. If the number is larger than or equal to the largest
 * element in the array, it returns the largest element. Otherwise, it returns the
 */
/**
 * The function `findFloor` in JavaScript finds the largest element in a sorted array that is less than
 * or equal to a given number.
 * @param arr - An array of numbers in ascending order.
 * @param num - The `num` parameter in the `findFloor` function represents the number for which we want
 * to find the largest number in the array that is less than or equal to `num`. The function uses a
 * binary search algorithm to efficiently find this number in a sorted array.
 * @param [low=0] - The `low` parameter represents the lowest index in the array that we are currently
 * considering in the binary search algorithm. It is initially set to 0, which is the first index of
 * the array.
 * @param [high] - The `high` parameter in the `findFloor` function represents the highest index in the
 * array `arr` that we are currently considering for finding the floor value of `num`. It is initially
 * set to `arr.length - 1`, which is the index of the last element in the array.
 * @returns The `findFloor` function is returning the floor value of a given number in a sorted array.
 * If the number is found in the array, it returns the number itself. If the number is smaller than the
 * smallest element in the array, it returns -1. If the number is larger than or equal to the largest
 * element in the array, it returns the largest element. Otherwise, it returns the
 */
function findFloor (arr, num, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  if (num >= arr[high]) return arr[high];
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === num) return arr[mid];
  if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) return arr[mid - 1];
  if (num < arr[mid]) return findFloor(arr, num, low, mid - 1);
  return findFloor(arr, num, mid + 1, high);
}

module.exports = findFloor;