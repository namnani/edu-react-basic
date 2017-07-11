import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  }

  render() {
    const { next, total } = this.state;

    return (
      <div className="component-app">
        <Display
          value={next || total || '0'}
        />
        <ButtonPanel
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
