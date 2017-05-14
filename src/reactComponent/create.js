/* eslint-disable */
import React, { PureComponent } from 'react';

// extends React.Component(React.PureComponent)
class Test extends PureComponent {
  render() {
   return <div>{this.props.name}</div>; 
  }
}

// declare stateless function
function Test(props) {
  return <div>{props.name}</div>;
}

const Test = (props) => <div>{props.name}</div>;
