/**
 * 🧩 Problem: Reverse a String
 *
 * Write a function that takes a string as input and returns the string reversed.
 *
 * 📥 Input:
 *   A string (e.g., "hello")
 *
 * 📤 Output:
 *   Reversed string (e.g., "olleh")
 *
 * 📌 Examples:
 *   reverseString("apple")      → "elppa"
 *   reverseString("hello")      → "olleh"
 *   reverseString("Greetings!") → "!sgniteerG"
 */

/**
 * ✅ Solution 1: Using built-in JavaScript methods
 *
 * Approach:
 * 1. Convert string to array using split('')
 * 2. Reverse the array using reverse()
 * 3. Convert back to string using join('')
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const reserveStringSolution1 = (str) => {
    return str.split('').reverse().join('');
}

/**
 * ✅ Solution 2: Using a loop (recommended for interviews)
 *
 * Approach:
 * 1. Initialize an empty string
 * 2. Loop through each character
 * 3. Prepend each character to build reversed string
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const reserveStringSolution2 = (str) => {
    let reverse = '';

    for (let character of str) {
        reverse = character + reverse;
    }

    return reverse;
}

/**
 * ✅ Solution 3: Using Array.reduce()
 *
 * Approach:
 * 1. Convert string to array
 * 2. Use reduce() to accumulate reversed string
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const reserveStringSolution3 = (str) => {
    return str.split('').reduce((rev, char) => char + rev, '');
}

/**
 * 📦 Export all solutions (CommonJS)
 */
module.exports = {
    reserveStringSolution1,
    reserveStringSolution2,
    reserveStringSolution3,
};