"use strict";

/**
 * This program removes all the keys which contains undefined, empty or false as values
 */

const inputObject = {
    name: "Dhiman",
    username: undefined,
    password: "admin",
    email: "",
    isCrazy: false,
    isCool: true
};

/**
 * Convert this objects to arrays: [["name":"Dhiman"],["username":undefined]....]
 * {@link https://shortly.page.link/swHV}
 */
const entries = Object.entries(inputObject);
console.log("entries: ", entries);

/**
 * {@link https://shortly.page.link/YJJC}
 */
const result = entries.reduce((a, [key,value]) => value ? (a[key]=value,a) : a, {});
console.log("Result: ", result);