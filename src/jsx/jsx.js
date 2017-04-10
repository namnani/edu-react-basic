import React from 'react'
import PropTypes from 'prop-types'

const helloElement = <h1>Hello!</h1>;

const helloWrapper = (
  <div>
    {helloElement}
  </div>
);

const Greeting = ({ name = '아무개', message }) => (
  <div>{name}님 {message}!</div>
);

Greeting.propTypes = {
  name: PropTypes.string
}

window.jsx = {
  helloElement,
  helloWrapper,
  Greeting,
}
