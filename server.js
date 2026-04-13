//Reverse a string
const stringReversal = require('./string_reversal');
const {reserveStringSolution1, reserveStringSolution2, reserveStringSolution3} = stringReversal;

// console.log(reserveStringSolution1('apple'));
// console.log(reserveStringSolution2('hello'));
// console.log(reserveStringSolution3('Greetings!'))


// Palindrome check of an string
const stringPalindrome = require('./palindrome');
const {checkPalindromeWithBuildInFunction, checkPalindromeWithoutBuildInFunction, checkPalindrome} = stringPalindrome;
//
// console.log(checkPalindromeWithBuildInFunction('anma'));
// console.log(checkPalindromeWithoutBuildInFunction('abba'));
// console.log(checkPalindrome('abba'));
// console.log(checkPalindrome2('2112'));


//reverse int check
const reverseInt = require('./reverse_int');
const {reverseIntegerBuiltIn, reverseIntegerManual, reverseIntegerMath, reverseIntegerReduce,} = reverseInt;
//
// console.log(reverseIntegerBuiltIn(-100));
// console.log(reverseIntegerManual(-100));
// console.log(reverseIntegerMath(-100));
// console.log(reverseIntegerReduce(-100));

//Max character
const characterOccuerance = require('./max-char');
const {maxCharMap, maxCharTwoPass, maxCharReduce, maxCharSort} = characterOccuerance;

// console.log(maxCharMap("abcccccccd"));
// console.log(maxCharTwoPass("abcdefghijklmnopqrst"));
// console.log(maxCharReduce("apple 1231111"));
// console.log(maxCharSort("apple 1231111"));

const fizbuz = require('./fizzbuzz')
const {fizzBuzzClassic, fizzBuzzString, fizzBuzzArray, fizzBuzzMap} = fizbuz;

fizzBuzzClassic(5);
fizzBuzzString(10);
fizzBuzzArray(15);
fizzBuzzMap(20);