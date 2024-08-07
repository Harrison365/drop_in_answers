/*
Write a function that takes an array of numbers and returns the biggest and smallest in an object.
If there is only one number in the array, that will be both the biggest and the smallest.
If there are no numbers in the array, it should return an empty object.

e.g. findBiggestAndSmallest([1, 2, 99, 100])
returns { biggest: 100, smallest: 1 }
*/

function findMinMax(arr) {
  if (arr.length === 0) {
    return {};
  }
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { biggest: max, smallest: min };
}

console.log(findMinMax([]));
console.log(findMinMax([1]));
console.log(findMinMax([1, 2, 3]));
