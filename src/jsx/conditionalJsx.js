import React from 'react';
import ReactDOMServer from 'react-dom/server';
import console from '../util/console';

const elements = {
  hello: () => <h1>Hello!</h1>,
  goodbye: () => <h1>Good Bye!</h1>,
};

function getElementByType(type) {
  return elements[type];
}

const Message = getElementByType('goodbye');
console.log(ReactDOMServer.renderToStaticMarkup(<Message />));

const AOrDiv = true ? 'a' : 'div';
console.log(ReactDOMServer.renderToStaticMarkup(<AOrDiv>안녕</AOrDiv>));