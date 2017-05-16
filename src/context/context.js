/* eslint no-unused-vars: off, react/prefer-stateless-function: off, react/no-multi-comp: off */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class GrandChild extends Component {
  render() {
    return (
      <div>GrandChild {this.context.name}</div>
    );
  }
}

GrandChild.contextTypes = {
  name: PropTypes.string
}

class Child extends Component {
  render() {
    return (
      <div>
        <div>Child</div>
        <GrandChild />
      </div>
    );
  }
}

class Parent extends Component {
  getChildContext() {
    return { name: this.props.name };
  }

  render() {
    return (
      <div>
        <div>Parent {this.props.name}</div>
        <Child />
      </div>);
  }
}

Parent.childContextTypes = {
  name: PropTypes.string
};

ReactDOM.render(
  <Parent name='test' />,
  document.getElementById('root')
);
