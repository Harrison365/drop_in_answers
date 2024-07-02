/*Find Even Length Strings
This function will take an  array of values, and should return an  array of all the  even length strings.
Anything that's not a string, or not a string of even length, should  not be returned in the array.
If there are no even length strings, it should return an empty array.
Examples:
findEvenLengthStrings(['hi', 'bye'])
// returns ['hi']

findEvenLengthStrings(['bye'])
// returns []

findEvenLengthStrings(['keepOnlyMe', 'notMe', 4])
// returns ['keepOnlyMe']
*/

function findEvenLengthStrings(array) {
  const finalArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length % 2 === 0 && typeof array[i] === "string") {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

console.log(findEvenLengthStrings(["keepOnlyMe", "notMe", 4, "Aa"]));
