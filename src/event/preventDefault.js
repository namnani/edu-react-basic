import React from 'react';
import ReactDOM from 'react-dom';
import console from '../util/console';
import '../index.css';

const Anchor = ({ children }) => {
  const handleClick = (e) => {
    // console.log(e)
    // console.log(e.nativeEvent)
    e.preventDefault();
    console.log('클릭!!!!');
  }

  return (
    <a href='http://www.naver.com' onClick={handleClick}>
      {children}
    </a>
  )
};

ReactDOM.render(
  <Anchor children='NAVER2' />,
  document.getElementById('root')
);