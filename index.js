function isPalindrome(word) {
  const lowerCaseWord = word.toLowerCase();
  const reversedWord = lowerCaseWord.split('').reverse().join('')
  return lowerCaseWord === reversedWord
}

/* 
  Add your pseudocode here
  *First write the function isPalindrome()
  *Then create a variable that takes the word and changes it to lowerCase
  *Then create a variable that changes the lowercasedword to reversed
  *Then create a if condition that checks if the lowercasedword === the variable in reverse 
  *we turn the variable in reverse by using split() which splits the words
  *we use reverse () to reverse the words
  *we use join () to join the reversed words
*/

/*
  Add written explanation of your solution here
 *The function takes in a string(word) then it changes the word to lowercase and assigns it to a variable
 *The function changes the lowercased word to a reversed word and assigns it to a variable
 *The function then compares the two variables if they are the same
 *If they are , it returns true , if they are not it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting : true");
  console.log("=>", isPalindrome("abba"))

  console.log("expecting: true")
  console.log("=>", isPalindrome("a"))

  console.log("Expecting : false")
  console.log("=>", isPalindrome("ab"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
