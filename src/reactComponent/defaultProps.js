import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  render() {
    return <div>count: {this.props.count}</div>;
  }
}

Counter.defaultProps = {
  count: 1
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
