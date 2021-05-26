import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

class Counter extends React.Component {
  render() {
    const { count = 777 } = this.props
    return <div>count: {count}</div>;
  }
}

Counter.defaultProps = {
  count: 3
}

Counter.displayName = 'Counter123(with test)'

ReactDOM.render(
  <Counter count={'333px2'}/>,
  document.getElementById('root')
);