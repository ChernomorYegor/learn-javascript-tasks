'use strict';
// Part 1. The JavaScript language


// 11.1 Introduction: callbacks

// 11.1.1
// function addText() {
//   showCircle(150, 150, 100, (div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }
//
// function showCircle(cx, cy, radius, callback) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);
//
//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';
//     div.addEventListener('transitionend', function addTextCallback() {
//       callback(div);
//       div.removeEventListener('transitionend', addTextCallback);
//     });
//   }, 0);
// }



// 11.2 Promise

// 11.2.1
// let promise = new Promise(function(resolve, reject) {
//   resolve(1);
//
//   setTimeout(() => resolve(2), 1000); // This is ignored
// });
//
// promise.then(alert); // 1

// 11.2.2
// function delay(ms) {
//   return new Promise( (resolve) => setTimeout(resolve, ms));
// }
//
// delay(3000).then(() => alert('runs after 3 seconds'));

// 11.2.3
// function addText() {
//   showCircle(150, 150, 100).then(div => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }
//
// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);
//
//   return new Promise( resolve => {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';
//       div.addEventListener('transitionend', function addTextCallback() {
//         div.removeEventListener('transitionend', addTextCallback);
//         resolve(div);
//       });
//     }, 0);
//   })
// }



// 11.3 Promises chaining

// 11.3.1
// promise.then(f1).catch(f2);
// // Versus:
// promise.then(f1, f2);
// // Answer: They don't work the same. The error is unhandled without .catch() in the second case.



// 11.4 Error handling with promises

// 11.4.1
// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);
// // Nope, it won't. The error is generated not while the executor is running, but later.
// // The promise can’t handle it because try..catch" around the function code handles only synchronous errors.



// 11.8 Async/await

// 11.8.1
// // Before:
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }
//
// loadJson('no-such-user.json')
//   .catch(alert); // Error: 404
//
// // After:
// async function loadJson(url) {
//   let response = await fetch(url);
//
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   } else {
//     throw new Error(response.status);
//   }
// }
//
// loadJson('no-such-user.json')
//    .catch(alert); // Error: 404

// 11.8.2
// // Before:
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }
//
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new HttpError(response);
//       }
//     });
// }
//
// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");
//
//   return loadJson(`https://api.github.com/users/${name}`)
//     .then(user => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch(err => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }
//
// demoGithubUser();
//
// // After:
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }
//
// async function loadJson(url) {
//   let response = await fetch(url);
//
//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   } else {
//     throw new HttpError(response);
//   }
// }
//
// // Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//   let user;
//
//   while(true) {
//     let name = prompt('Enter a name?', 'iliakan');
//
//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('No such user, please reenter.');
//       } else {
//         throw err;
//       }
//     }
//   }
//
//   alert(`Full name: ${user.name}.`);
//   return user;
// }
//
// demoGithubUser();

// 11.8.3
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000));
//
//   return 10;
// }
//
// function f() {
//   wait().then(resolve => alert(resolve));
// }
//
// f();