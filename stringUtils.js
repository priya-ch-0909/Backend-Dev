// stringUtils.js

// Capitalize the first letter of each word
function capitalize(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Reverse the entire string
function reverse(str) {
  return str.split('').reverse().join('');
}

// Count vowels in the string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return [...str].filter(char => vowels.includes(char)).length;
}

// Export the functions
module.exports = {
  capitalize,
  reverse,
  countVowels
};