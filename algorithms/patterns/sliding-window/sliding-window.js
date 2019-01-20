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
  * Time Complexity: O(n)
  * Space Complexity: O(1)
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

/**
 * Given an array of positive integers and a positive integer, return the minimal length of
 * a contiguous subarray of which the sum is greater than or equal to the integer passed to 
 * the function, if there isn't one then return 0 instead.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * 
 * @param {number[]} arr - an array of positive integers
 * @param {*} num - a positive integer
 */
function minSubArrayLen(arr, num) {
    let result = Infinity;

    let from = 0;
    let to = 0;

    let sum = arr[from];

    while (to < arr.length) {
        if (sum < num) {
            sum += arr[++to];
        } else {
            result = Math.min((to - from) + 1, result);
            sum -= arr[from++];
        }
    }

    return result === Infinity ? 0 : result;
}

/**
 * Given a string return the length of the longest substring with all distinct characters.
 * 
 * Time Complexity: O(n)
 * 
 * @param {string} str 
 */
function findLogestSubstring(str) {
    if (str.length === 0) {
        return 0;
    }
    
    const arr = str.split('');
    
    let from = 0;
    let to = 1;
    
    let chars = {
        [arr[from]]: from
    };

    let result = 1;

    while (to < arr.length) {
        if (chars[arr[to]] == null) {
            chars[arr[to]] = to;
            result = Math.max(to - from + 1, result);
            to++;
        } else {
            from = chars[arr[to]] + 1;
            chars = {
                [arr[from]]: from
            };
            to = from + 1;
        }
    }

    return result;
}

module.exports = { findLogestSubstring, maxSubarraySum, minSubArrayLen };
