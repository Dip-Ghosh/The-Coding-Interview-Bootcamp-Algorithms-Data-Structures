/**
 * Prints numbers from 1 to n with FizzBuzz rules.
 *
 * - Multiples of 3 → "fizz"
 * - Multiples of 5 → "buzz"
 * - Multiples of both 3 and 5 → "fizzbuzz"
 *
 * @example fizzBuzz(5)
 * Output:
 * 1
 * 2
 * fizz
 * 4
 * buzz
 */

/**
 * Solution 1: Classic loop with conditionals
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number} n
 * @returns {void}
 */
const fizzBuzzClassic = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz');
        else if (i % 3 === 0) console.log('fizz');
        else if (i % 5 === 0) console.log('buzz');
        else console.log(i);
    }
};

/**
 * Solution 2: Cleaner logic using string building
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number} n
 * @returns {void}
 */
const fizzBuzzString = (n) => {
    for (let i = 1; i <= n; i++) {
        let output = '';

        if (i % 3 === 0) output += 'fizz';
        if (i % 5 === 0) output += 'buzz';

        console.log(output || i);
    }
};

/**
 * Solution 3: Functional approach with Array.from()
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} n
 * @returns {string[]}
 */
const fizzBuzzArray = (n) => {
    return Array.from({ length: n }, (_, i) => {
        const num = i + 1;

        if (num % 15 === 0) return 'fizzbuzz';
        if (num % 3 === 0) return 'fizz';
        if (num % 5 === 0) return 'buzz';
        return num.toString();
    });
};

/**
 * Solution 4: Using map after range creation
 * Time: O(n)
 * Space: O(n)
 *
 * @param {number} n
 * @returns {string[]}
 */
const fizzBuzzMap = (n) => {
    return [...Array(n).keys()].map(i => {
        const num = i + 1;

        let result = '';
        if (num % 3 === 0) result += 'fizz';
        if (num % 5 === 0) result += 'buzz';

        return result || num.toString();
    });
};

module.exports = {
    fizzBuzzClassic,
    fizzBuzzString,
    fizzBuzzArray,
    fizzBuzzMap,
};