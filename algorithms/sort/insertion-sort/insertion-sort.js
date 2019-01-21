const { defaultComparator } = require('../sort-utils');
/**
 * Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list. At each iteration, 
 * insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. 
 * It repeats until no input elements remain.
 * 
 * Insertion sort has an average time complexity of O(n^2).
 * 
 * Insertion sort is efficient for small data sets and more efficient in practice then most other simple quadratic algorithms such 
 * as selection sort or bubble sort.
 * It excells at sorting data sets that are already substantially sorted and is great for sorting streamed data sets.
 */

/**
 * Given an array and an optional comparator the function will sort the values in the array using the insertion sort algorithm.
 * 
 * @param {Array} arr 
 * @param {Function} comparator - an optional callback that will take two values from `arr` to be compared.
 * @returns {Array}
 */
function insertionSort(arr, comparator) {
    if (!arr.length) return arr;
    if (typeof comparator !== 'function') {
        comparator = defaultComparator;
    }

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let newIdx = null;
        for (let j = i - 1; j >= 0 && comparator(currentVal, arr[j]) < 0; j--) {
            arr[j + 1] = arr[j];
            newIdx = j;
        }
        if (newIdx !== null) {
            arr[newIdx] = currentVal;
        }
    }
    return arr;
}

module.exports = { insertionSort };
