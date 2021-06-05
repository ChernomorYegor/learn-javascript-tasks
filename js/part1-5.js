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
// let num1 = +prompt("The first number?", "");
// let num2 = +prompt("The second number?", "");
//
// alert(num1 + num2);

// 5.2.2
// alert( Math.round(6.35 * 10) / 10 ); // 6.4

// 5.2.3
// My solution:
// function readNumber() {
//   let number = prompt("Enter a number please?", "0");
//
//   if (!isFinite(+number)) {
//     return readNumber();
//   }
//
//   return number ? +number : null;
// }
//
// alert(`Read: ${readNumber()}`);
//
// Original solution:
// function readNumber() {
//   let num;
//
//   do {
//     num = prompt("Enter a number please?", 0);
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