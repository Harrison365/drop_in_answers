/* Check Is Prime
Write a function that takes a single positive integer as its argument. If the number is prime, it should return true. Otherwise, it should return  false.
(A prime number is a number that is divisible only by itself and 1 - for example 2, 3, 5, 7, 11. The number 1 is not a prime.)
Example:
checkIsPrime(2)
// returns true

checkIsPrime(4)
// returns false
*/

function checkIsPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
