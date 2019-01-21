const { defaultComparator, swap } = require('../sort-utils');
/**
 * Selection sort is a sorting algorithm, specifically an in-place comparison sort, it divides the input list into two 
 * parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, 
 * and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is 
 * empty and the unsorted sublist is the entire input list. 
 * The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, 
 * exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist 
 * boundaries one element to the right.
 * 
 * Bubble sort has a time complexity of O(n^2).
 * 
 * Bubble sort is inefficient on large lists, and generally performs worse than the similar insertion sort. 
 * Selection sort is noted for its simplicity, and it has performance advantages over more complicated algorithms in certain 
 * situations, particularly where auxiliary memory is limited.
 */

/**
 * Given an array and an optional comparator the function will sort the values in the array using the selection sort algorithm.
 * 
 * @param {Array} arr 
 * @param {Function} comparator - an optional callback that will take two values from `arr` to be compared.
 * @returns {Array}
 */
function selectionSort(arr, comparator) {
    if (!arr.length) return arr;
    if (typeof comparator !== 'function') {
        comparator = defaultComparator;
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[minIndex], arr[j]) > 0) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }

    return arr;
}

module.exports = { selectionSort };
