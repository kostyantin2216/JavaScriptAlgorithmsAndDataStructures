const { defaultComparator, swap } = require('../sort-utils');
/**
 * Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, 
 * compares adjacent pairs and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. 
 * The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
 * 
 * Bubble sort has a worst-case and average complexity of О(n^2).
 * 
 * Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.
 * Bubble sort can be practical if the input is in mostly sorted order with some out-of-order elements nearly in position.
 */

/**
 * Given an array and an optional comparator the function will sort the values in the array using the bubble sort algorithm.
 * 
 * @param {Array} arr 
 * @param {Function} comparator - an optional callback that will take two values from `arr` to be compared.
 * @returns {Array}
 */
function bubbleSort(arr, comparator) {
    if (typeof comparator !== 'function') {
        comparator = defaultComparator;
    }

    for (let i = 0; i < arr.length; i++) {
        let noSwaps = true;
        for (let j = 1; j < arr.length - i; j++) {
            if (comparator(arr[j - 1], arr[j]) > 0) {
                swap(arr, j-1, j);
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }

    return arr;
}

module.exports = { bubbleSort };
