"use strict";
/**
 * @description Convert only space separated string to camelCase. Eg: Camel Case -> camelCase but Camel-Case -> camel-case
 * @param {string} input
 * @return {string|undefined} returns a camelCase string or else null if no input provided
 */
 function convertToCamelCase(input) {
    if (input) {
        /**
         * input = "Nodejs is Cool";
         * 1. toLowerCase => "nodejs is cool"
         * 2. replace => nodejsIsCool
         *  a. /\s+\b\w/g => find all characters (eg: i (from is), c (from cool)) preceded by spaces
         *  b. toUpperCase => convert all characters matched in point (a) to upper case. Eg: I, C
         */
        const camelCaseString = input.toLowerCase().replace(/\s+\b\w/g, match => match.toUpperCase().trim());

        // remove any extra spaces. Eg: "Plain Text Email - 1 Way" -> "plainTextEmail -1Way" --REMOVED space-> "plainTextEmail-1Way"
        camelCaseString = camelCaseString.replace(/\s+/g, "");

        return camelCaseString;
    }

    return null;
}