import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const helloElement = <h1>Hello!</h1>;

const helloWrapper = (
  <div>
    {helloElement}
  </div>
);

const Greeting = ({ name = '아무개', message }) => (
  <div>{name}님 {message}!</div>
);

const OddOrEven = ({ number }) => {
  let type;
  if (number % 2 === 0) {
    type = <strong>짝수</strong>;
  } else {
    type = <i>홀수</i>;
  }

  return <div>{number}은 {type}입니다.</div>;
}

window.jsx = {
  helloElement,
  helloWrapper,
  Greeting,
  OddOrEven,
}

ReactDOM.render(
  <h1>Hello!</h1>,
  document.getElementById('root')
);
