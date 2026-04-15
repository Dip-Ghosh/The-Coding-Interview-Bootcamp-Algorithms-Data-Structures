/**
 * Splits an array into smaller sub-arrays ("chunks") of a specified size.
 *
 * @function chunk
 *
 * @description
 * Given an input array and a chunk size, this utility divides the array into
 * multiple sub-arrays where each sub-array has a maximum length of `size`.
 *
 * The final chunk may contain fewer elements if the total number of elements
 * is not evenly divisible by `size`.
 *
 * @example
 * chunk([1, 2, 3, 4], 2)
 * // → [[1, 2], [3, 4]]
 *
 * chunk([1, 2, 3, 4, 5], 2)
 * // → [[1, 2], [3, 4], [5]]
 *
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
 * // → [[1, 2, 3], [4, 5, 6], [7, 8]]
 *
 * @param {Array} array - The input array to be divided into chunks.
 * @param {number} size - The maximum size of each chunk (must be > 0).
 *
 * @returns {Array<Array>} A new array containing chunked sub-arrays.
 *
 * @throws {Error} If `size` is less than or equal to 0.
 *
 * @notes
 * - This function does not mutate the original array.
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */


/**
 * Solution 1: Iterative grouping approach
 *
 * Builds chunks dynamically by checking the last inserted sub-array.
 *
 * @param {Array} array - Input array
 * @param {number} size - Chunk size
 * @returns {Array<Array>} Chunked array
 */
const solutionChunk1 = (array, size) => {
    if (size <= 0) {
        throw new Error("Chunk size must be greater than 0");
    }

    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
};


/**
 * Solution 2: Slice-based approach
 *
 * Uses Array.prototype.slice to create chunks by stepping through
 * the array in increments of `size`.
 *
 * @param {Array} array - Input array
 * @param {number} size - Chunk size
 * @returns {Array<Array>} Chunked array
 */
const solutionChunk2 = (array, size) => {
    if (size <= 0) {
        throw new Error("Chunk size must be greater than 0");
    }

    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
};

module.exports = {
    solutionChunk1,
    solutionChunk2
};