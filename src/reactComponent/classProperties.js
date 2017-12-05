import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Counter extends React.Component {
  render() {
    return <div>count: {this.props.count}</div>;
  }
}

Counter.defaultProps = {
  count: 1
}

Counter.displayName = 'Counter(with test)'

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
