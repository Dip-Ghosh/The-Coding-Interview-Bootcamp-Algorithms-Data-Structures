//Reverse a string
const stringReversal = require('./string_reversal');
const {reserveStringSolution1, reserveStringSolution2, reserveStringSolution3} = stringReversal;

// console.log(reserveStringSolution1('apple'));
// console.log(reserveStringSolution2('hello'));
// console.log(reserveStringSolution3('Greetings!'))


// Palindrome check of an string
const stringPalindrome = require('./palindrome');
const { checkPalindromeWithBuildInFunction,  checkPalindromeWithoutBuildInFunction, checkPalindrome } = stringPalindrome;
//
// console.log(checkPalindromeWithBuildInFunction('anma'));
// console.log(checkPalindromeWithoutBuildInFunction('abba'));
// console.log(checkPalindrome('abba'));
// console.log(checkPalindrome2('2112'));


//reverse int check
const reverseInt = require('./reverse_int');
const { reverseIntegerBuiltIn,  reverseIntegerManual, reverseIntegerMath, reverseIntegerReduce, } = reverseInt;

console.log(reverseIntegerBuiltIn(-100));
console.log(reverseIntegerManual(-100));
console.log(reverseIntegerMath(-100));
console.log(reverseIntegerReduce(-100));