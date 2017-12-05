/* eslint no-unused-vars: off */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Parent from './Parent'
import '../index.css';

class Root extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  onClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <div onClick={this.onClick}>Root</div>
        <Parent count={this.state.count} />
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
