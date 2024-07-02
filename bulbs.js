/*Jim plans to buy new pack of assorted light bulbs.
He has heard that light bulbs are the most efficient when their serial number
is an odd number
has exactly six digits
He would appreciate you writing some code that figured out which serial numbers met the criteria.
When his function runs, it will receive an array of serialNumbers - something like
[32438, 34193, 149143, 4329429, 98537, 238791, 23492, 298342]
You need to add code that will ensure Jim collects the serial numbers he wants to keep in the provided variable, efficientSerialNumbers.
For the above array, this would mean that efficientSerialNumbers should end up containing
[149143, 238791]*/

//find the numbers that have 6 digits and are odd

const numbers = [32438, 34193, 149143, 4329429, 98537, 238791, 23492, 298342];

const newArr = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 1000000 && numbers[i] > 99999 && numbers[i] % 2 === 1) {
    newArr.push(numbers[i]);
  }
}

console.log(newArr);
