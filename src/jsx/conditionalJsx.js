import React from 'react'

const helloElement = <h1>Hello!</h1>;
const goodbyeElement = <h1>Good Bye!</h1>;

const elements = {
  hello: helloElement,
  goodbye: goodbyeElement,
}

function getElementByType(type) {
  return elements[type];
}

const Message = getElementByType('hello');

export { Message, elements }
