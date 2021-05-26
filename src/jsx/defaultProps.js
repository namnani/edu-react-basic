import React from 'react';
import ReactDOM from 'react-dom';

const TestElement = ({ test }) => {
  console.log(test);
  return <div>TestElement2222</div>;
}

ReactDOM.render(
  <TestElement test />,
  document.getElementById('root')
)