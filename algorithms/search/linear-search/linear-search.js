/**
 * Linear search or sequential search is a method for finding an element within a list. 
 * It sequentially checks each element of the list until a match is found or the whole list has been searched.
 * 
 * Linear search runs in at worst linear time and makes at most n comparisons - O(n).
 * 
 * Linear search is rarely practical because other search algorithms and schemes allow significantly faster searching for all but short lists.
 */

/**
 * Given an array and a value return the index at which the value exists, if it
 * does not exist return -1.
 * 
 * Do not use Array.indexOf to implement this function.
 * 
 * @param {Array<number | string>} arr 
 * @param {number | string} val 
 * @returns {number} the index of `val` in `arr`
 */
function linearSearch(arr, val){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

module.exports = { linearSearch };
