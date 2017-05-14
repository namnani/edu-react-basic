/* eslint-disable */

// http://exploringjs.com/es6/index.html

// 1.[const, let]
var 대체

// 2.[Template literals] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
var test = 'test';
var message = 'hello ' + test;

const message2 = `hello ${test}`

// 3.[Arrow function] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98
var hello = function(name) {
  return `Hello ${name}`;
}

const hello2 = (name) => `Hello ${name}`;

// 4.[destructuring assignment] https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a:1, b:2 });
console.log(a); // 1
console.log(b); // 2

({ a, b, ...rest } = { a:1, b:2, c:3, d:4 });
