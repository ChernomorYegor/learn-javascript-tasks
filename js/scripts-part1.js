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