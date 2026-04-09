/**
 * Reverses an integer while preserving its sign.
 *
 * Examples:
 * reverseInteger(15) === 51
 * reverseInteger(981) === 189
 * reverseInteger(-1500) === -51
 * reverseInteger(-90) === -9
 */

/**
 * Solution 1: Using built-in methods (clean & concise)
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} num
 * @returns {number}
 */
const reverseIntegerBuiltIn = (num) => {
    return parseInt(num.toString().split('').reverse().join(''), 10) * Math.sign(num);
};

/**
 * Solution 2: Manual reversal (no array helpers)
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} num
 * @returns {number}
 */
const reverseIntegerManual = (num) => {
    const isNegative = num < 0;
    let str = Math.abs(num).toString();
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return (isNegative ? -1 : 1) * parseInt(reversed, 10);
};

/**
 * Solution 3: Math-based approach (no string conversion)
 * Time: O(log n)
 * Space: O(1)
 *
 * @param {number} num
 * @returns {number}
 */
const reverseIntegerMath = (num) => {
    let n = Math.abs(num);
    let reversed = 0;

    while (n > 0) {
        const digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    return reversed * Math.sign(num);
};

/**
 * Solution 4: Using reduce()
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} num
 * @returns {number}
 */
const reverseIntegerReduce = (num) => {
    const reversed = num
        .toString()
        .split('')
        .reverse()
        .reduce((acc, digit) => acc + digit, '');

    return parseInt(reversed, 10) * Math.sign(num);
};

module.exports = {
    reverseIntegerBuiltIn,
    reverseIntegerManual,
    reverseIntegerMath,
    reverseIntegerReduce,
};