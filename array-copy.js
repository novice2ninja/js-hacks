"use-strict";

/**
 * @author Dhiman Das
 * Here, Array copy hacks using spread operator
 */

const firstArray = [1,2,3,4];
const secondArray = [5,6,7,8];

console.log("Fist Array: ", firstArray);
console.log("Second Array: ", secondArray);

/**
 * {@link https://shortly.page.link/3hJt}
 */
const combineArray = [...firstArray,...secondArray];
console.log("Combine Array: ", combineArray);