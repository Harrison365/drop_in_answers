// Is This a Palindrome?
// Write a function that takes a string, and returns true if it is a palindrome, and false if it is not.

// (A palindrome is a word that, when reversed, is exactly the same. e.g. "madam" or "racecar")

// Examples:

// isThisAPalindrome('yay');
// // returns true

// isThisAPalindrome('no');
// // returns false

function isThisAPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

//could also use a decrementing for loop to reverse the string
