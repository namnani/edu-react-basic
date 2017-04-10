import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class GrandChild extends React.Component {
  render() {
    return (
      <div>GrandChild {this.props.name}</div>
    );
  }
}

// GrandChild.contextTypes = {
//   name: PropTypes.string
// }

class Child extends React.Component {
  render() {
    return (
      <div>
        <div>Child</div>
        <GrandChild name={this.props.name} />
      </div>
    );
  }
}

class Parent extends React.Component {
  // getChildContext() {
  //   return { name: this.props.name };
  // }

  render() {
    return (
      <div>
        <div>Parent {this.props.name}</div>
        <Child name={this.props.name} />
      </div>);
  }
}

// Parent.childContextTypes = {
//   name: PropTypes.string
// };

ReactDOM.render(
  <Parent name='test' />,
  document.getElementById('root')
);
