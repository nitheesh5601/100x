/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let string1 = str1.toLowerCase();
  let splitstr1 = string1.split("")
  splitstr1.sort()
  let sortStr1 = splitstr1.join("")

  let string2 = str2.toLowerCase();
  let splitstr2 = string2.split("")
  splitstr2.sort()
  let sortStr2 = splitstr2.join("")

  if(sortStr1 == sortStr2){
    return true;
  }else{
    return false;
  }
}

module.exports = isAnagram;
