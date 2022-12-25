'use strict';
// Part 1. The JavaScript language


// 6.1 Recursion and stack

// 6.1.1
// Solution 1. Using a for loop.
// function sumTo(n) {
//   let sum = 0;
//
//   for (let i = 1; i <= n; i += 1) {
//     sum += i;
//   }
//
//   return sum;
// }
//
// Solution 2 (the slowest). Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// function sumTo(n) {
//   return (n === 1) ? 1 : n + sumTo(n - 1);
// }
//
// Solution 3 (the fastest). Using the arithmetic progression formula.
// function sumTo(n) {
//   return n * (1 + n) / 2;
// }
//
// alert( sumTo(100) ); // 5050
//
// P.P.S. Can we use recursion to count sumTo(100000)?
// No, it will most likely be an error, too many recursive calls.

// 6.1.2
// function factorial(n) {
//   return (n === 1) ? 1 : n * factorial(n - 1);
// }
//
// alert( factorial(5) ); // 120

// 6.1.3
// Solution with using a recursion (it’s slow).
// function fib(n) {
//   return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
// }
//
// My solution with using a loop and an array.
// function fib(n) {
//   let fibArray = [0, 1, 1];
//
//   for (let i = 3; i <= n; i += 1) {
//     fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//   }
//
//   return fibArray[n]
// }
//
// Original solution (dynamic programming bottom-up).
// function fib(n) {
//   let a = 1;
//   let b = 1;
//
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//
//   return b;
// }
//
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// 6.1.4
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// Solution 1 (it's better). Using a loop.
// function printList(list) {
//   let temp = list;
//
//   while (temp) {
//     alert(temp.value);
//     temp = temp.next;
//   }
// }
//
// Solution 2. Using a recursion.
// function printList(list) {
//   alert(list.value);
//
//   if (list.next) {
//     printList(list.next);
//   }
// }
//
// printList(list);

// 6.1.5
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
//
// Solution 1. Using a loop.
// function printReverseList(list) {
//   let valuesArray = [];
//   let temp = list;
//
//   while (temp) {
//     valuesArray.push(temp.value);
//     temp = temp.next;
//   }
//
//   for (let i = valuesArray.length - 1; i >= 0; i -= 1) {
//     alert(valuesArray[i]);
//   }
// }
//
// Solution 2. Using a recursion.
// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }
//
//   alert(list.value);
// }
//
// printReverseList(list);