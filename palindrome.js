/**
 * Checks whether a given string is a palindrome.
 * A palindrome reads the same forward and backward.
 * Spaces and punctuation are included in the comparison.
 */

/**
 * Solution 1: Without using built-in reverse methods
 * @Time Complexity: O(n)
 * @Space Complexity: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
const isPalindromeManual = (str) => {
    let reversed = '';

    for (const char of str) {
        reversed = char + reversed;
    }

    return str === reversed;
};

/**
 * Solution 2: Using built-in methods
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
const isPalindromeBuiltIn = (str) => {
    return str === str.split('').reverse().join('');
};

/**
 * Solution 3: Two-pointer approach (optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} str
 * @returns {boolean}
 */
const isPalindromeTwoPointer = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
};

/**
 * Solution 4: Using Array.every()
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
const isPalindromeEvery = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
};

module.exports = {
    isPalindromeManual,
    isPalindromeBuiltIn,
    isPalindromeTwoPointer,
    isPalindromeEvery,
};