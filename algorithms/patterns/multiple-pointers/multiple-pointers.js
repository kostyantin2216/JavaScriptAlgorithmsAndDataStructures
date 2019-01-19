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

module.exports = { countUnique };
