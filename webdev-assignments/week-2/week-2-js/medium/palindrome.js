/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let filteredStr = str.toLowerCase().split('').join('').replace(/ /g,"").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
  let reversedStr = str.toLowerCase().split('').reverse().join('').replace(/ /g,"").replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g,"");
  return filteredStr === reversedStr;
}

module.exports = isPalindrome;
