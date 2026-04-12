/**
 * Returns the most frequently used character in a string.
 *
 * @Examples maxChar("abcccccccd") === "c"
 * @Examples maxChar("apple 1231111") === "1"
 */

/**
 * Solution 1: Using object map (clean & efficient)
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
const maxCharMap = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;

        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
};

/**
 * Solution 2: Separate counting + comparison
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
const maxCharTwoPass = (str) => {
    const charMap = {};

    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1;
    }

    let max = 0;
    let maxChar = '';

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
};

/**
 * Solution 3: Using reduce()
 * Time: O(n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
const maxCharReduce = (str) => {
    const charMap = str.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    return Object.keys(charMap).reduce((maxChar, char) => {
        return charMap[char] > charMap[maxChar] ? char : maxChar;
    });
};

/**
 * Solution 4: Using sorting (less efficient but simple idea)
 * Time: O(n log n)
 * Space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
const maxCharSort = (str) => {
    const sorted = str.split('').sort();
    let maxChar = sorted[0];
    let maxCount = 1;
    let currentCount = 1;

    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxChar = sorted[i];
        }
    }

    return maxChar;
};

module.exports = {
    maxCharMap,
    maxCharTwoPass,
    maxCharReduce,
    maxCharSort,
};