/**
 * The frequency counter pattern uses objects or sets to collect 
 * values/frequencies of other values, this can often avoid the need
 * for nested loops O(n^2) operations with arrays or strings.
 */

/** 
 * Given two strings, write a function to determine if the second string 
 * is an anagram of the first.
 * 
 * Time Complexity: O(n)
 * 
 * @param {string} left - some text
 * @param {string} right - some text
 * @returns {boolean}
 */
function validAnagram(left, right) {
    if (left.length !== right.length) {
        return false;
    }

    const leftFreq = getFrequency(left.split(''));
    const rightFreq = getFrequency(right.split(''));

    for (let key in leftFreq) {
        if (rightFreq[key] !== leftFreq[key]) {
            return false;
        }
    }

    return true;
}

/**
 * Given an array find all the duplicates and return them.
 * 
 * Time Complexity: O(n)
 * 
 * @param {Array} arr - array to check for duplicates.
 * @returns {Array} all duplicates inside `arr`
 */
function findDuplicates(arr) {
    const count = getFrequency(arr);

    const duplicates = [];
    for (let value in count) {
        if (count[value] > 1) {
            duplicates.push(value);
        }
    }
    return duplicates;
}

function getFrequency(arr) {
    return arr.reduce(frequencyReducer, {});
}

function frequencyReducer(accumulator, value) {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
}

module.exports = { validAnagram, findDuplicates };
