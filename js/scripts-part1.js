"use strict";
// Part 1. The JavaScript language


// 2.4 Variables

// 2.4.1
// let admin;
// let name;
//
// name = "John";
// admin = name;
//
// alert(admin); // "John"

// 2.4.2
// let ourPlanetName = "Earth";
// let currentUserName = "John";

// 2.4.3
// const BIRTHDAY = '18.04.1982'; // Yes
// const age = someCode(BIRTHDAY); // No


// 2.5 Data types

// 2.5.1
// let name = "Ilya";
//
// alert( `hello ${1}` ); // hello 1
// alert( `hello ${"name"}` ); // hello name
// alert( `hello ${name}` ); // hello Ilya


// 2.6 Interaction: alert, prompt, confirm

// 2.6.1
// let userName = prompt("What is your name?", "");
// alert(userName);


// 2.8 Basic operators, maths

// 2.8.1
// let a = 1, b = 1;
// let c = ++a; // 2, a = 2
// let d = b++; // 1, b = 2

// 2.8.2
// let a = 2;
// let x = 1 + (a *= 2); // 5, a = 4

// 2.8.3
// "" + 1 + 0 // "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 // "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // Infinity
// "  -9  " + 5 // "  -9  5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2 (\t and \n - space characters)

// 2.8.4
// let a = prompt("Первое число?", "1");
// let b = prompt("Второе число?", "2");
//
// alert(a + b); // 12
// alert(+a + +b); // 3 - correct solution


// 2.9 Comparisons

// 2.9.1
// 5 > 4 // true
// "apple" > "pineapple" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false


// 2.10 Conditional branching: if, '?'

// 2.10.1
// if ("0") {
//   alert( 'Hello' );
// } // Yes, alert will be shown

// 2.10.2
// let answer = prompt("What is the “official” name of JavaScript?", "");
//
// if (answer === "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don’t know? ECMAScript!");
// }

// 2.10.3
// let writtenNum = prompt("Write a number", "");
//
// if (writtenNum > 0) {
//   alert(1);
// } else if (writtenNum < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// 2.10.4
// let result = (a + b < 4) ? 'Below': 'Over';

// 2.10.5
// let message = (login == 'Employee') ? 'Hello' :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';


// 2.11 Logical operators

// 2.11.1
// alert( null || 2 || undefined ); // 2

// 2.11.2
// alert( alert(1) || 2 || alert(3) ); // alert(1) returns undefined so first 1 then 2

// 2.11.3
// alert( 1 && null && 2 ); // null

// 2.11.4
// alert( alert(1) && alert(2) ); // 1, undefined

// 2.11.5
// alert( null || 2 && 3 || 4 ); // 3

// 2.11.6
// if (age >= 14 && age <= 90)

// 2.11.7
// if ( !(age >= 14 && age <= 90) )
// if (age < 14 || age > 90)

// 2.11.8
// if (-1 || 0) alert( 'first' ); // -1, yes
// if (-1 && 0) alert( 'second' ); // 0, no
// if (null || -1 && 1) alert( 'third' ); // 1, yes

// 2.11.9
// let login = prompt("Who's there?", "");
//
// if (login === "Admin") {
//
//   let password = prompt("Password?", "");
//
//   if (password === "TheMaster") {
//     alert("Welcome!");
//   } else if (!password) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
//
// } else if (!login) {
//   alert("Canceled");
// } else {
//   alert("I don't know you");
// }


// 2.13 Loops: while and for

// 2.13.1
// let i = 3;
//
// while (i) {
//   alert( i-- );
// } // 3, 2, 1

// 2.13.2
// The prefix form ++i:
// let i = 0;
// while (++i < 5) alert( i ); // 1, 2, 3, 4
//
// The postfix form i++:
// let i = 0;
// while (i++ < 5) alert( i ); // 1, 2, 3, 4, 5

// 2.13.3
// The postfix form:
// for (let i = 0; i < 5; i++) alert( i ); // 0, 1, 2, 3, 4
//
// The prefix form:
// for (let i = 0; i < 5; ++i) alert( i ); // 0, 1, 2, 3, 4

// 2.13.4
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     alert( i );
//   }
// }

// 2.13.5
// let i = 0;
//
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }

// 2.13.6
// My version:
// let num = 0;
//
// while (num <= 100) {
//   num = prompt("Enter a number greater than 100?", "0");
//   if (num == null) break;
// }
//
// Original version:
// let num;
//
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

// 2.13.7
// My version:
// let n = prompt("Find all prime numbers up to", "");
//
// if (!n) {
//  alert("Canceled");
// }
//
// for (let i = 2; i < n; i++) {
//   let isPrime = true;
//
//   for (let j = i - 1; j >= 2; j--) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//
//   if (isPrime) {
//     alert( i );
//   }
// }
//
// Original version:
// let n = 10;
//
// nextPrime: for (let i = 2; i <= n; i++) { // for each i...
//
//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }
//
//   alert( i ); // a prime
// }


// 2.14 The "switch" statement

// 2.14.1
// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

// 2.14.2
// const number = +prompt('Enter a number between 0 and 3', '');
//
// switch (number) {
//   case 0:
//     alert( 'You entered the number 0' );
//     break;
//
//   case 1:
//     alert( 'You entered the number 1' );
//     break;
//
//   case 2:
//   case 3:
//     alert( 'You entered the number 2 or maybe 3' );
//     break;
// }


// 2.15 Functions

// 2.15.1
// No

// 2.15.2
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you?');
// }
//
// function checkAge(age) {
//   return (age > 18) || confirm('Did parents allow you?');
// }

// 2.15.3
// function min(a, b) {
//   return (a < b) ? a : b;
// }

// 2.15.4
// let x = +prompt('Enter a number you want to raise to the power', '');
// let n = +prompt('Enter a power of the number (only natural values)', '');
//
// function pow(x, n) {
//   return Math.pow(x, n);
// }
//
// if (!x || !n || n < 1) {
//   alert( 'Incorrect data entered' );
// } else {
//   alert( 'Result: ' + pow(x, n) );
// }


// 2.17 Arrow functions, the basics

// 2.17.1
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
//
// ask(
//     "Do you agree?",
//     () => alert("You agreed."), // * Changed
//     () => alert("You canceled the execution.") // * Changed
// );