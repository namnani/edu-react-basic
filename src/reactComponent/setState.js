import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class StateTest extends Component {
  constructor(props) {
    super(props);
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
      <div className='set-state'>
        <div>Current Count: {this.state.count}</div>
        <button onClick={this.increase}>sync+1</button>
        <button onClick={this.asyncIncrease}>async+1</button>
      </div>
    )
  }
}

ReactDOM.render(
  <StateTest />,
  document.getElementById('root')
);
