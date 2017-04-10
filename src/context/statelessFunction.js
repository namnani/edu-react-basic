import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }, context) =>
  <button style={{ background: context.color }}>
    {children}
  </button>;

Button.contextTypes = {
  color: PropTypes.string
};
