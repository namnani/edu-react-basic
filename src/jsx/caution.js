import React from 'react';
import ReactDOM from 'react-dom';

const TestElement = ({ test }) => {
  console.log(test);
  return <div>test</div>;
}

ReactDOM.render(
  <TestElement test />,
  document.getElementById('root')
)

const InvalidElement = (
  <div>하하</div>
  <div>호호</div>
);

const ValidElement = (
  <div>
    <div>하하</div>
    <div>호호</div>
  </div>
);