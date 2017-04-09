import React from 'react';
import ReactDOMServer from 'react-dom/server';
import console from '../util/console';

const blue = console.highlightWith('blue');
const red = console.highlightWith('red');

const element = <div>Hello!</div>;

blue(ReactDOMServer.renderToString(element));
red(ReactDOMServer.renderToStaticMarkup(element));
