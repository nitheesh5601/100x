/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largst = numbers[0];

    for(i=1;i<numbers.length;i++){
        if(largst < numbers[i]){
            largst = numbers[i]
        }

    }
    return largst
}

module.exports = findLargestElement;