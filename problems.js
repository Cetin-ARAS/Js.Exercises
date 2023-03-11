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

//! const value = "10232 cetin"

//! const isPalindrome = (val) => {
//!    const reverse = val.split("").reverse().join("")
//!    return reverse == val
//! }
//! console.log("reverse", isPalindrome(value))

// 7-- faktoriyel

//! const number = 5;
//! let result = 1;

//! for (let index = 1; index <= number; index++) {
//!            result  *=  index          
//! }  console.log("result", result)

// 8-- basamak sayı bulma

//! (string için)
//! let adet = 0;
//! let sayı = "216312365413";  

//! while (adet < sayı.length) {
//!   adet += 1;
//! }
//! console.log(adet)

//! let sayı = 216312365413
//! let adet = 0

//! while (sayı !=  0) {
//!   sayı = Math.floor(sayı/10)
//!   adet++
  
//! }
//! console.log(adet)

//?9-- aranan değerin yerini bulma(binaary search)
// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
// let x = 0;
// let arrLength = arr.length - 1

// const binarySearch=(number) => {
//   while(x<arrLength){
//     const y = Math.floor(x + (arrLength - x) / 2)
//     if (arr[y] == number) {
//       return y
//     }
//     if ( arr[y] < number) {
//       x = y + 1
//     }else {
//       arrLength = y - 1
//     }
//   }
//   return -1
// }
// console.log(binarySearch(7))

//? 10-- asal sayı bulma

// const number = 19
// let counter = 0
// for (let index = 2; index< number; index++) {
//     if (number % index == 0) {
//       counter++;
//       break;
//     }
// }

// console.log(counter > 0 ? "Asal Değil" : "Sayı asal")

//?11--bubleSort( küçükten büyüğe sıralama)
 
// const bubbleSort = (arr) => {
//   let length = arr.length
//   for (let i = 0; i < length - 1; i++) {
//     for (let j = 0; j < length - i - 1; j++) {
//       if(arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp 
//       }
//     }
//   }
//   return arr
// }

// const myArray = [14, 35, 65, 189, 253, 652, 698, 654136465, 2313131360, 15, 354, 2966]
// console.log("Sıralı Array", bubbleSort(myArray));


//?12--Mükemmel sayı bölenleri kendisine eşit olan sayı 6 = 3+2+1 gibi

let x = 6
let y = 0;

// for (let i = 1; i < x; i++) {
//     if (x % i == 0 ){
//       y += i 
//      }
// } 
// if ( y == x ){
//     console.log(" x mükemmel sayıdır.")
// }else{
//   console.log("x mükemmel sayı değildir")}
