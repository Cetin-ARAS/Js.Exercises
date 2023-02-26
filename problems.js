// 1-  Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2

//! const args = [20, 50, -4]
//! console.log(Math.min(...args))
//! console.log(args.sort((a,b)=>a-b)[0])
//! console.log(args.reduce((x, y) => x > y ? y : x ))

// 2-Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//! function sum(numbers) {
   //! return numbers.reduce((a, b) => a + b, 0); }
  
// 3-   1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

//! function addBinary(a, b) {
//!     // İki sayının toplamını bulun
//!     let sum = a + b;
    
//!     // Toplamı ikili sayı sistemiyle ifade edin
//!     let binarySum = sum.toString(2);
    
//!    return binarySum;
//!   }

//4--str ="double  spaces"  ( reverse sentence)

//!function reverseWords(str) {
    // Go for itr
  //!  let x = str.split(' ').map(word => word.split('').reverse().join(''))
    //!return x.join(' ')
  //!}

  // 5-- Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

  //! function countSheeps(arrayOfSheep) {
    //! let counter = 0
    //! for(let i = 0; i < arrayOfSheep.length; i++) {
    //!    if(arrayOfSheep[i]) counter += 1
    //!}
  //!  return counter
//!}

// 6-- palindrom sayı ve kelimeler

const value = "10232 cetin"

const isPalindrome = (val) => {
   const reverse = val.split("").reverse().join("")
   return reverse == val
}
console.log("reverse", isPalindrome(value))
