import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import App from '../App';

const root = document.body.querySelector('#root');

root.innerHTML = ReactDOMServer.renderToString(<App />);

setTimeout(() => {
  ReactDOM.hydrate(<App />, root);
}, 5000)
