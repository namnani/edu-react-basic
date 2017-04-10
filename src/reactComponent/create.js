import React, { PureComponent } from 'react';

class Test extends PureComponent {
  render() {
   return <div>{this.props.name}</div>; 
  }
}

function Test(props) {
  return <div>{props.name}</div>;
}

const Test = (props) => <div>{props.name}</div>;