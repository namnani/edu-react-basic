/* eslint-disable */
import React, { PureComponent } from 'react';

// extends React.Component(React.PureComponent)
class Test extends PureComponent {
  render() {
    // const { name = '333' } = this.props
    const { name = '333' } = { name } 
    return <div>{name}</div>; 
  }
}

// declare stateless function
// function Test(props) {
//   return <div>{props.name}</div>;
// }

// const Test = (props) => <div>{props.name}</div>;



ReactDOM.render(
  <Test name='444'/>,
  document.getElementById('root')
);
