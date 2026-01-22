const stringUtils = require('./stringUtils');

const input = "hello world";

console.log("Capitalized:", stringUtils.capitalize(input));   // Hello World
console.log("Reversed:", stringUtils.reverse(input));         // dlrow olleh
console.log("Vowel Count:", stringUtils.countVowels(input));  // 3