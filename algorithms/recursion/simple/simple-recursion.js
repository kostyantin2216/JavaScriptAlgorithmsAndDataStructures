/**
 * Given a base and an exponent return the power of the base to the exponent.
 * This function should mimic the functionality of `Math.pow()`.
 * Do not worry about negative bases and exponents.
 * 
 * @param {number} base - a positive number
 * @param {number} exponent - a positive number
 * @returns {number}
 */
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }

    return base * power(base, exponent - 1);
}

/**
 * Given a number return the factorial of that number.
 * A factorial is the product of an integer and all the integers below it.
 * Factorial zero is always 1.
 * 
 * @param {number} n 
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

/**
 * Given an array of numbers return the product of them all.
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    const value = arr.shift();
    return value * productOfArray(arr);
}

/**
 * Given a number, add up all the numbers from 0 to the number passed to the function.
 * 
 * @param {number} n 
 * @returns {number}
 */
function recursiveRange(n) {
    if (n === 1) {
        return n;
    }
    return n + recursiveRange(n - 1);
}

/**
 * Given a number returtn the nth number in the fibonacci sequence.
 * The fibonacci sequence is a sequence of whole numbers which starts at 1 and 1 and where every number
 * thereafter is equal to the sum of the previous two numbers. eg. [1,1,2,3,5,8,...].
 * 
 * @param {number} n 
 * @returns {number}
 */
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

module.exports = { factorial, fib, power, productOfArray, recursiveRange };
