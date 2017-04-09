import React, { PureComponent as Component } from 'react';

class StateTest extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  asyncIncrease = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  render() {
    return (
      <div>
        <span>Current Count: {this.state.count}</span>
        <button onClick={this.increase}>sync+1</button>
        <button onClick={this.asyncIncrease}>async+1</button>
      </div>
    )
  }
}

export default StateTest;
