/**
 * Given a string return the same string but reversed.
 * 
 * @param {string} str 
 * @returns {string}
 */
function reverse(str) {
    if (str.length === 1) {
        return str;
    }
    return reverse(str.substring(1)) + str[0];
}

/**
 * Given a string return true of the string is palindrome(reads the same forward and backward).
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    if (str.length === 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}

/**
 * Given an array and a callback return true if a single value returns true when passed to the callback.
 * 
 * @param {Array} arr 
 * @param {Function} predicate 
 */
function someRecursive(arr, predicate) {
    if (arr.length === 0) {
        return false;
    }
    if (predicate(arr[0])) {
        return true;
    }
    return someRecursive(arr.slice(1), predicate);
}

/**
 * Given an array of arrays return a new array with all values flattened.
 * 
 * @param {Array} value - array of arrays
 * @param {Array} result - for inner use
 * @returns {Array}
 */
function flatten(value, result = []) {
    if (Array.isArray(value)) {
        if (value.length === 0) return;
        flatten(value[0], result);
        flatten(value.slice(1), result);
    } else {
        result.push(value);
    }
    return result;
}

/**
 * Given an array of strings, capitalize the first leter of each string in the array.
 * 
 * @param {string[]} arr 
 * @returns {string[]}
 */
function capitalizeFirst(arr) {
    if (arr.length === 0) {
        return arr;
    } else {
        let value;
        if (arr[0].length > 1) {
            value = arr[0][0].toUpperCase() + arr[0].slice(1);
        } else {
            value = arr[0];
        }
        return [value].concat(capitalizeFirst(arr.slice(1)));
    }
}

/**
 * Given an object return the sum of all even numbers in an object which may contain nested objects.
 * 
 * @param {Object} obj 
 * @returns {number}
 */
function nestedEvenSum(obj) {
    if (obj != null) {
        if (typeof obj === 'object') {
            let result = 0;
            for (const value of Object.values(obj)) {
                result += nestedEvenSum(value);
            }
            return result;
        } else if (typeof obj === 'number' && obj % 2 === 0) {
            return obj;
        }
    }
        
    return 0;
}

/**
 * Given an array of words return a new array containing each word capitalized.
 * 
 * @param {string[]} arr - array of strings to capitalize
 * @param {string[]} result - for inner use only
 * @returns {string[]}
 */
function capitalizeWords(arr, result = []) {
    if (arr.length < 1) {
        return result;
    }
    result.push(arr[0].toUpperCase());
    return capitalizeWords(arr.slice(1), result);
}

/**
 * Given an object find all the values which are numbers and convert them to strings.
 * 
 * @param {Object} obj 
 * @returns {Object}
 */
function stringifyNumbers(obj) {
    const result = {};

    Object.keys(obj).forEach(key => result[key] = extractValue(obj, key));
    
    return result;
}

function extractValue(obj, key) {
    const value = obj[key];
    if (value != null) {
        if (typeof value === 'object' && !Array.isArray(value)) {
            return stringifyNumbers(value);
        } else if (typeof value === 'number') {
            return value.toString();
        }
    }
    
    return value;
}

/**
 * Given an object return an array of all the values in the object that have a typeof string.
 * 
 * @param {Object} obj 
 * @param {string[]} result - for inner use only
 * @returns {string[]}
 */
function collectStrings(obj, result = []) {
    Object.keys(obj).forEach((key) => {
        if (typeof obj[key] === 'object') {
            if (!Array.isArray(obj[key])) {
                collectStrings(obj[key], result);
            }
        } else if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        }
    });

    return result;
}

module.exports = { 
    capitalizeFirst, 
    capitalizeWords, 
    collectStrings, 
    flatten, 
    isPalindrome, 
    nestedEvenSum, 
    reverse, 
    someRecursive, 
    stringifyNumbers 
};
