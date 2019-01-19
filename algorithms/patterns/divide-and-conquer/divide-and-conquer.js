/**
 * The divide and conquer pattern involves dividing a data set into
 * smaller chunks and then repeating a process with a subset of data.
 */

 /**
  * Given a sorted array of numbers, write a function that accepts an array
  * and a value and returns the index of that value in the array. 
  * 
  * @param {number[]} arr - a sorted number array
  * @param {number} num - number to find
  * @returns {number} - the index of `num` in `arr` 
  */
function search(arr, num) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let current = arr[middle];

        if (current < num) {
            min = middle + 1;
        } else if (current > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

module.exports = { search };
