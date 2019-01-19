/**
 * The sliding window pattern creates a window which can either be an array 
 * or a number from one position to another and depending on certain conditions 
 * increases or closes the window and sometimes opens new windows, it can be 
 * useful for keeping track of a subset of data in an array, string, etc.
 */

 /**
  * Given an array and a number calculate the maximum sum of `n` consecutive
  * elements in `arr`.
  * 
  * @param {number[]} arr - array to calculate sum from. 
  * @param {number} n - amount of consecutive values to sum.
  * @returns {number} 
  */
function maxSubarraySum(arr, n) {
    if (arr.length < n) return null;
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

module.exports = { maxSubarraySum };
