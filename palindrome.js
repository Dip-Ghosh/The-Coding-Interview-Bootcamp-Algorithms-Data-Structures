/**
 * 🧩 Problem: Given a string and it will return true if  string is a palindrome
 * or false if it is not. Palindromes are strings that form the same word if it iw reversed.
 * *Do* include spaces and punctualtion in determining if the string is a palindrome
 *
 * Write a function that takes a string as input and returns the true or false based on palindrome logic.
 *
 * 📥 Input:
 *   A string (e.g., "abba")
 *
 * 📤 Output:
 *   Reversed string (e.g., "abba") then it will return true as it is a palindrome
 *
 */

/**
 * Solution 1
 * @param str
 * @returns {boolean}
 */
const checkPalindromeWithoutBuildInFunction = (str) => {
    let reverseStr = '';

    for(char of str) {
        reverseStr = char + reverseStr;
    }

    return str === reverseStr;
}

/**
 * Solution 2
 *
 * @param str
 * @returns {boolean}
 */
const checkPalindromeWithBuildInFunction = (str) => {
    const reverseStr = str
        .split('')
        .reverse()
        .join('');

    return str === reverseStr;
}

/**
 * Solution 2
 *
 * @param str
 * @returns {boolean}
 */
const checkPalindrome = (str) => {

    const arr = str.split('');

    for (let i= 0; i< arr.length; i++) {
        if (arr[i] === arr[arr.length-i -1]) return false;
    }

    return true;
}


const checkPalindrome2 = (str) => {
    return   str.split('').every((char, i) => {
          return char === str[str.length-i -1]
      })
}



module.exports = {
    checkPalindromeWithoutBuildInFunction,
    checkPalindromeWithBuildInFunction,
    checkPalindrome,
    checkPalindrome2
};