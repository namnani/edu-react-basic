import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Root from './Root'
import './index.css';
import jsx from './jsx/jsx'

window.jsx = jsx;

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

