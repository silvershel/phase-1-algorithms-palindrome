function isPalindrome(word) {
  let original = word;
  let reverse = [...original].reverse().join('');
  if (original === reverse) {
    return true; 
  } else {
    return false;
  }
}

// TEST CASES
console.log("Expecting: 'racecar' = true");
console.log(isPalindrome('racecar'));

console.log("Expecting: 'hello' = false");
console.log(isPalindrome('hello'));

/* 
  Add your pseudocode here

  Write a function isPalindrome that will receive one argument, a string. 
  Your function should return true if the string is a palindrome 
  (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), 
  and return false if it is not a palindrome.

  Iterate over a string and reverse it.
  If the original word and the reverse word are the same, return true.
  If not, return false.
*/

/*
  Add written explanation of your solution here
  
  I implemented the .reverse() function to reverse whatever word is taken in as an argument.
  It takes the original word and creats an array from the letters.
  the .reverse() reverses the array. .join rejoins the elements into a new string.
  If the original word and the reverse word match, the function returns true.
  If not, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
