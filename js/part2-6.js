"use strict";
// Part 2. Browser: Document, Events, Interfaces


// 6.3 Event loop: microtasks and macrotasks

// 6.3.1
// setTimeout(function timeout() {
//   console.log('Timeout');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//   console.log('Create the promise');
//   resolve();
// });
//
// p.then(function(){
//   console.log('Promise handling');
// });
//
// console.log('End of script');
//
// // Answer: Create the promise, End of script, Promise handling, Timeout