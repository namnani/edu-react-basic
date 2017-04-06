import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import jsx from './jsx/jsx'
import Parent from './lifeCycle/Parent'

window.jsx = jsx;

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);

