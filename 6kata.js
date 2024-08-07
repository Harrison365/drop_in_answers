/* 
Retrieve Key
Write a function that takes an  object, and a string of the name of a key on that object. It should return the value of that key.
If the key doesn't exist on the object, it should return  undefined
Examples:
retrieveKey({ name: 'Sam' }, 'name');
// returns 'Sam'
retrieveKey({ password: 'Chips!' }, 'password');
// returns 'Chips!'
retrieveKey({ name: 'Sam' }, 'age');
// returns undefined
*/

const obj = { a: 1, b: 2 };

function valueFinder(object, key) {
  return object[key];
}

console.log(valueFinder(obj, "b"));
