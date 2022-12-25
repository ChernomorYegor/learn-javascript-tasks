'use strict';
// Part 1. The JavaScript language


// 3.2 Coding Style

// 3.2.1
// Original version:
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }
//
// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }
//
// Fixed version:
// function pow(x, n) {
//   let result = 1;
//
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
//
// let x = prompt("x?", "");
// let n = prompt("n?", "");
//
// if (n <= 0) {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// } else {
//   alert( pow(x, n) );
// }



// 3.5 Automated testing with Mocha

// 3.5.1
// Original version:
// it("Raises x to the power n", function() {
//   let x = 5;
//
//   let result = x;
//   assert.equal(pow(x, 1), result);
//
//   result *= x;
//   assert.equal(pow(x, 2), result);
//
//   result *= x;
//   assert.equal(pow(x, 3), result);
// });
//
// Fixed version:
// describe("Raises x to the power n", function() {
//
//   it("5 in the power of 1 equals 5", function () {
//     assert.equal(pow(5, 1), 5);
//   });
//
//   it("5 in the power of 2 equals 5", function () {
//     assert.equal(pow(5, 2), 25);
//   });
//
//   it("5 in the power of 3 equals 5", function () {
//     assert.equal(pow(5, 3), 125);
//   });
// });