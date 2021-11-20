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