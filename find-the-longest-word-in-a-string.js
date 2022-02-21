// Find the Longest Word in a String

// ***********************************************************************
// solution 1
// ***********************************************************************

function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(longest, word) {
      return Math.max(longest, word.length)
    }, 0);
}
 
// 0 after the callback function is used to give an initial value to the longest, so that Math.max will know where to start.

// ***********************************************************************
// solution 2
// ***********************************************************************

// function findLongestWordLength(str) {
//   return Math.max(...str.split(' ').map(word => word.length));
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

// str.split(" ") splits the string into an array, taking spaces as separators. It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

// Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

// str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

// Finally, we pass the array as argument for the Math.max function with the spread operator ...

// ***********************************************************************
// solution 3
// ***********************************************************************

// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }

// Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

// Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.