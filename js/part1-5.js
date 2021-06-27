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



// 5.5 Array methods

// 5.5.1
// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index > 0 ? word[0].toUpperCase() + word.slice(1) : word)
//     .join('');
// }

// 5.5.2
// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// 5.5.3
// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (a > arr[i] || arr[i] > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// 5.5.4
// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// alert( arr ); // 8, 5, 2, 1, -10

// 5.5.5
// function copySorted(arr) {
//   return arr.slice().sort();
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

// 5.5.6
// function Calculator() {
//
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-':  (a, b) => a - b,
//   };
//
//   this.calculate = function(str) {
//     let arr = str.split(' ');
//     let operator = arr[1];
//     let num1 = +arr[0];
//     let num2 = +arr[2];
//
//     if (!this.methods[operator] || isNaN(num1) || isNaN(num2)) {
//       return NaN;
//     }
//
//     return this.methods[operator](num1, num2);
//   };
//
//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// 5.5.7
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [ john, pete, mary ];
//
// let names = users.map(user => user.name);
//
// alert( names ); // John, Pete, Mary

// 5.5.8
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [ john, pete, mary ];
//
// let usersMapped = users.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }) );
//
//   /*
//   usersMapped = [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
//     { fullName: "Mary Key", id: 3 }
//   ]
//   */
//
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// 5.5.9
// function sortByAge(array) {
//   array.sort((a, b) => a.age - b.age);
// }
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [ pete, john, mary ];
//
// sortByAge(arr);
//
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// 5.5.10
// let arr = [1, 2, 3];
//
// My solution:
// function shuffle(array) {
//   let arrTemp = array.slice();
//
//   arr.length = 0;
//
//   for (let i = 0; i < arrTemp.length; i++) {
//     let pos = Math.floor(Math.random() * arrTemp.length);
//
//     if (!arr[pos] && arr[pos] !== 0) {
//       arr[pos] = arrTemp[i]
//     } else {
//       i--;
//     }
//   }
// }
//
// Original solution (the best):
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
//
//     [array[i], array[j]] = [array[j], array[i]]; // let t = array[i]; array[i] = array[j]; array[j] = t
//   }
// }
//
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };
//
// for (let i = 0; i < 1000000; i++) {
//   shuffle(arr);
//   count[arr.join('')]++;
// }
//
// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

// 5.5.11
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//
// function getAverageAge(users) {
//   return users.reduce((sum, user) => sum + user.age, 0) / users.length;
// }

// 5.5.12
// My solution number 1:
// function unique(arr) {
//   let arrUniques = [];
//
//   for (let item of arr) {
//     if (!arrUniques.includes(item)) {
//       arrUniques.push(item);
//     }
//   }
//
//   return arrUniques;
// }
//
// My solution number 2:
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(strings) ); // Hare, Krishna, :-O

// 5.5.13
// function groupById(arr) {
//   return arr.reduce((usersById, user) => {
//     usersById[user.id] = user;
//     return usersById;
//   }, {});
// }



// 5.7 Map and Set

// 5.7.1
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O

// 5.7.2
// My solution:
// function aclean(arr) {
//   let anSet = new Set();
//   let anCleanArr = [];
//
//   for (let word of arr) {
//     let wordSorted = word.toLowerCase().split("").sort().join("");
//
//     if (!anSet.has(wordSorted)) {
//       anSet.add(wordSorted);
//       anCleanArr.push(word);
//     }
//   }
//
//   return anCleanArr;
// }
//
// Original solution number 1:
// function aclean(arr) {
//   let map = new Map();
//
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
//
// Original solution number 2:
// function aclean(arr) {
//   let obj = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split("").sort().join("");
//     obj[sorted] = arr[i];
//   }
//
//   return Object.values(obj);
// }
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear"

// 5.7.3
// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
// keys.push("more");
//
// alert( keys ); // name, more



// 5.8 WeakMap и WeakSet

// 5.8.1
// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
//
// let readMessages = new WeakSet();
//
// // two messages have been read
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages has 2 elements
//
// // ...let's read the first message again!
// readMessages.add(messages[0]);
// // readMessages still has 2 unique elements
//
// // answer: was the message[0] read?
// alert("Read message 0: " + readMessages.has(messages[0])); // true
//
// messages.shift();
// // now readMessages has 1 element (technically memory may be cleaned later)
//
// // Other solution:
// // the symbolic property is only known to our code
// let isRead = Symbol("isRead");
// messages[0][isRead] = true;

// 5.8.2
// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
//
// let readMessages = new WeakMap();
//
// readMessages.set(messages[0], Date.now());
//
// messages.shift();



// 5.9 Object.keys, values, entries

// 5.9.1
// function sumSalaries(salaries) {
//   let sum = 0;
//
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//
//   return sum;
// }
//
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// alert( sumSalaries(salaries) ); // 650
//
// Other solution:
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0)
// }

// 5.9.2
// function count(obj) {
//   return Object.keys(obj).length; // Also Object.values(obj).length or Object.entries(obj).length;
// }



// 5.10 Destructuring assignment

// 5.10.1
// let user = {
//   name: "John",
//   years: 30
// };
//
// let {name, years: age, isAdmin = false} = user;
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// 5.10.2
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// // My solution:
// function topSalary(salaries) {
//   if (!Object.keys(salaries).length) {
//     return null;
//   }
//
//   let topSalaryEmployeeName = "";
//   let topEmployeeSalary = 0;
//
//   for (let [name, salary] of Object.entries(salaries)) {
//     if (salary > topEmployeeSalary) {
//       topSalaryEmployeeName = name;
//       topEmployeeSalary = salary;
//     }
//   }
//
//   return topSalaryEmployeeName;
// }
//
// // Original solution:
// function topSalary(salaries) {
//
//   let max = 0;
//   let maxName = null;
//
//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//
//   return maxName;
// }
//
// alert( topSalary(salaries) );