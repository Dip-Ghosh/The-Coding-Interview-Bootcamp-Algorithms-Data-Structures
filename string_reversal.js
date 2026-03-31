/**
 * Problem Reverse a string
 * Example
 * @param apple = elppa
 * @param hello = olleh
 * @param Greetings! = !sgniteerG
 */

/**
 * @solution 1
 */

const reserveString = (str) => {
    const arr = str.split('');
    arr.reverse();

    return arr.join('')
}

const apple = reserveString('apple');
console.log(apple);
reserveString('hello');
reserveString('Greetings!');