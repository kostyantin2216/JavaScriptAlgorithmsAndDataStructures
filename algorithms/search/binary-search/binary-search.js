/**
 * Binary search also known as half-interval search, logarithmic search or binary chop,  
 * is a search algorithm that finds the position of a target value within a sorted array.
 * 
 * Binary search compares the target value to the middle element of the array. 
 * If they are not equal, the half in which the target cannot lie is eliminated and the search 
 * continues on the remaining half, again taking the middle element to compare to the target value, 
 * and repeating this until the target value is found.
 * 
 * Binary search runs in logarithmic time in the worst case - O(log n)
 * 
 * Binary search is faster than linear search except for small arrays, but the array must be sorted first. 
 * Although specialized data structures designed for fast searching, such as hash tables, 
 * can be searched more efficiently, binary search applies to a wider range of problems.
 */

/**
 * Given a sorted array and a value return the index at which the value exists. Otherwise return -1.
 * 
 * @param {Array<string | number>} arr - a sorted array.
 * @param {string | number} val 
 * @returns {number} the index of `val` in `arr`.
 */
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length;
    let current = Math.floor(arr.length / 2);
    
    while (start < end && start !== current) {
        if (val === arr[current]) {
            return current;
        } else if (val > arr[current]) {
            start = current;
        } else {
            end = current;
        }
        current = Math.floor((start + end) / 2);
    }
    return -1;
}

module.exports = { binarySearch };
