/**
 * The multiple pointer pattern creates pointers or values which correspond
 * to an index or position and move towards the beginning, end or middle based
 * on a certain condition, it is very efficient for solving problems with
 * minimal space complexity.
 */

/**
 * Given a sorted array of numbers, write a function that returns
 * the count of unique values inside the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr - a sorted array
 * @returns {number}
 */
function countUnique(arr) {
    if (arr.length < 2) {
        return arr.length;
    }

    let count = 1;
    let current = 0;
    let next = 1;

    while (next < arr.length) {
        if (arr[current] < arr[next]) {
            count++;
            current = next;
        }
        next++;
    }

    return count;
}

/**
 * Given a sorted array of integers and a target avergae, determine if there is a pair
 * of values in the array where the average of the pair equals the target averrage,
 * there may be more then one pair that matches the average target.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} avg
 * @returns {boolean}
 */
function averagePair(arr, avg) {
    if (arr.length < 2) {
        return false;
    }

    const sum = avg * 2;

    let max = arr.length - 1;
    let min = 0;
    let tmpSum = 0;

    do {
        tmpSum = arr[min] + arr[max];

        if (tmpSum === sum) {
            return true;
        }

        tmpSum > sum ? (max = max - 1) : (min = min + 1);
    } while (min !== max);

    return false;
}

/**
 * Given two strings, check if the cahracters in the first string form a subsequence of the characters
 * in the second string. In other words, the function should check whether the characters in the first
 * string appear somewhere in the second string, without their order changing.
 * 
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 * 
 * @param {string} first 
 * @param {string} second 
 * @returns {boolean}
 */
function isSubsequence(first, second) {
    let current = 0;
    let next = 0;

    while (current < first.length && next < second.length) {
        if (first[current] === second[next]) {
            current++;
        }
        next++;
    }

    return current === first.length;
}

module.exports = { averagePair, countUnique, isSubsequence };
