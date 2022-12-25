'use strict';
// Part 1. The JavaScript language


// 4.1 Objects

// 4.1.1
// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// 4.1.2
// function isEmpty(obj) {
//   return !Object.keys(obj).length;
// }
//
// or
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//
//   return true;
// }

// 4.1.3
// Yep

// 4.1.4
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//
// let sum = 0;
//
// for (let key in salaries) {
//   sum += salaries[key];
// }
//
// alert(sum);

// 4.1.5
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
// }



// 4.4 Object methods, "this"

// 4.4.1
// Error (It needs a semicolon after let user = {...};)

// 4.4.2
// let obj, method;
//
// obj = {
//   go: function() { alert(this); }
// };
//
// obj.go();               // (1) [object Object]
//
// (obj.go)();             // (2) [object Object] ( (obj.go)() equals obj.go() )
//
// (method = obj.go)();    // (3) undefined (method = function() { alert(this); })
//
// (obj.go || obj.stop)(); // (4) undefined (method = function() { alert(this); })

// 4.4.3
// Error (this is undefined)

// 4.4.4
// let calculator = {
//   read: function() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
//   sum: function() {
//     return this.a + this.b;
//   },
//   mul: function() {
//     return this.a * this.b;
//   }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// 4.4.5
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this; // * Added
//   },
//   down() {
//     this.step--;
//     return this; // * Added
//   },
//   showStep: function() {
//     alert( this.step );
//   }
// };
//
// ladder.up().up().down().showStep(); // 1



// 4.5 Constructor, operator "new"

// 4.5.1
// let obj = {};
//
// function A() {
//   return obj;
// }
//
// function B() {
//   return obj;
// }
//
// alert( new A() === new B() ); // true

// 4.5.2
// function Calculator() {
//   this.read = function() {
//     this.a = +prompt("a?", "0");
//     this.b = +prompt("b?", "0");
//   };
//
//   this.sum = function() {
//     return this.a + this.b;
//   };
//
//   this.mul = function() {
//     return this.a * this.b;
//   };
// };
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// 4.5.3
// function Accumulator(startingValue) {
//   this.value = startingValue;
//
//   this.read = function() {
//     this.value += +prompt("How much to add?", "0");
//   }
// }
//
// let accumulator = new Accumulator(1); // initial value 1
//
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
//
// alert(accumulator.value); // shows the sum of these values