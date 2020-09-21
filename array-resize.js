"use strict";

/**
 * @author Dhiman Das
 * Here I'm gonna use array.length to shortend an array
 */

const resizeMe = [1,2,3,4,5,6,7,8,9,10];
console.log("Initial Array: ", resizeMe);

resizeMe.length = 5;
console.log("Made length to half: ", resizeMe);

resizeMe.length = 0;
console.log("Made length to zero: ", resizeMe);

resizeMe.length = 10;
console.log("Tried to increase the length: ", resizeMe);