import React from 'react';
import ReactDOM from 'react-dom';
import console from '../util/console';

const Anchor = ({ children }) => {
  const handleClick = (e) => {
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
  <Anchor>NAVER</Anchor>,
  document.getElementById('root')
);
