/*
The Northcoders party is nearly over & it's time to select the winners of the prize draw raffle!
 
You have been asked to write a function which will select the winners based on two factors: how much they paid, and their seat number. If both of these numbers are odd, the attendee wins a prize!

The `pickWinners` function will be passed an `array` of `numbers` representing ticket costs as its only argument. The _index position_ represents the seat number.

Your task is to return an `array` of `objects`. Each `object` should contain two keys. The first key is _seat_ with a value of the _odd index_. The second key is _ticketCost_ with a value of the ticket price at that index in the input array.

Examples below.

```js
pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
```
```js
pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
```
```js
pickWinners([1, 6, 13, 8, 29, 50])
// should return []
```
*/

function pickWinners(arr) {
  const returnArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0 && i % 2 !== 0) {
      returnArray.push({ seat: i, ticketCost: arr[i] });
    }
  }
  return returnArray;
}
console.log(pickWinners([6, 7, 12, 49]));
console.log(pickWinners([1, 3, 5, 7, 9, 11]));
console.log(pickWinners([1, 6, 13, 8, 29, 50]));
