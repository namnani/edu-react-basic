import React from 'react';
import ReactDOMServer from 'react-dom/server'
import console from '../util/console'

const whiteSpaceTest = [
  <div>Hello World</div>,
  <div>
    Hello World
  </div>,
  <div>
    Hello
    World
  </div>,
  <div>

    Hello World
  </div>
];

whiteSpaceTest.map(
  (element, i) => console.log(i, ReactDOMServer.renderToStaticMarkup(element))
)
