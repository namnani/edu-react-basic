/* eslint react/no-multi-comp: off, react/prefer-stateless-function: off */
import React from 'react';
import ReactDOM from 'react-dom';
import console from '../util/console';
import '../index.css';

class Child extends React.PureComponent {
  render() {
    const { handleClick } = this.props;
    console.highlightWith('blue')('child rendered');
    return <div onClick={handleClick}>Child</div>;
  }
}

class Parent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  update = () => this.setState({ count: this.state.count + 1 });
  handleClick = () => console.log('클릭!!!!');

  render() {
    console.highlightWith('red')('parent rendered');
    return (
      <div>
        <div onClick={this.update}>Parent</div>
        <Child handleClick={this.handleClick}>
          {this.props.children}
        </Child>
      </div>
    )
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);
