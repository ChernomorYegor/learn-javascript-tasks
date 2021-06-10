"use strict";
// Part 1. The JavaScript language


// 5.1 Methods of primitives

// 5.1.1
// let str = "Hello";
//
// str.test = 5;
//
// alert(str.test); // It will show us an error (strict mode) and undefined (no strict mode)



// 5.2 Numbers

// 5.2.1
// let num1 = +prompt("The first value?", "");
// let num2 = +prompt("The second value?", "");
//
// alert(num1 + num2);

// 5.2.2
// alert( Math.round(6.35 * 10) / 10 ); // 6.4

// 5.2.3
// My solution:
// function readNumber() {
//   let value = prompt("Enter a value please?", "0");
//
//   if (!isFinite(+value)) {
//     return readNumber();
//   }
//
//   return value ? +value : null;
// }
//
// alert(`Read: ${readNumber()}`);
//
// Original solution:
// function readNumber() {
//   let num;
//
//   do {
//     num = prompt("Enter a value please?", 0);
//   } while ( !isFinite(num) );
//
//   if (num === null || num === '') return null;
//
//   return +num;
// }
//
// alert(`Read: ${readNumber()}`);

// 5.2.4
// let i = 0;
// while (i != 10) { // Wrong comparison!!!
//   i += 0.2;
// }
// The reason:
// alert( 0.2.toFixed(20) );

// 5.2.5
// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }
//
// alert( random(1, 5) );

// 5.2.6
// function randomInteger(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }
//
// alert( randomInteger(1, 5) );



// 5.3 Strings

// 5.3.1
// My solution:
// function ucFirst(str) {
//   return (!str) ? '' : str[0].toUpperCase() + str.slice(1);
// }
//
// Original solution:
// function ucFirst(str) {
//   if (!str) return str;
//
//   return str[0].toUpperCase() + str.slice(1);
// }
//
// alert( ucFirst("john") ); // John

// 5.3.2
// function checkSpam(str) {
//   let strLowerCase = str.toLowerCase();
//   return strLowerCase.includes('viagra') || strLowerCase.includes('xxx');
// }
//
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// 5.3.3
// function truncate(str, maxlength) {
//   return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
// }

// 5.3.4
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }



// 5.4 Arrays

// 5.4.1
// let fruits = ["Apples", "Pear", "Orange"];
//
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");
//
// // what's in fruits?
// alert( fruits.length ); // 4

// 5.4.2
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor(styles.length - 1 / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");
//
// alert( styles );

// 5.4.3
// let arr = ["a", "b"];
//
// arr.push(function() {
//   alert( this );
// })
//
// arr[2](); // "a","b",function() {...}

// 5.4.4
// function sumInput() {
//   let arrNumbers = [];
//   let sum = 0;
//   let value;
//
//   while (true) {
//     value = prompt("A number please?", "0");
//
//     if (!isFinite(value) || value === "" || value === null) {
//       break;
//     }
//
//     arrNumbers.push(+value);
//   }
//
//   for (let i = 0; i < arrNumbers.length; i++) {
//     sum += arrNumbers[i];
//   }
//
//   return sum;
// }
//
// alert( sumInput() );

// 5.4.5
// My solution:
// function getMaxSubSum(arr) {
//   let maxSubSum = 0;
//   let subSum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//
//     if (subSum + arr[i] < subSum && subSum + arr[i] + arr[i + 1] < subSum) {
//       if (subSum > maxSubSum) {
//         maxSubSum = subSum;
//       }
//
//       subSum = 0;
//
//       continue;
//     }
//
//     if (i === arr.length - 1 && arr[i] < 0) {
//       maxSubSum = subSum;
//     }
//
//     subSum += arr[i];
//
//     if (subSum < 0) {
//       subSum = 0;
//     }
//
//     if (i === arr.length - 1 && subSum > maxSubSum) {
//       maxSubSum = subSum;
//     }
//   }
//
//   return maxSubSum;
// }
//
// Original solution:
// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let partialSum = 0;
//
//   for (let item of arr) {
//     partialSum += item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   return maxSum;
// }