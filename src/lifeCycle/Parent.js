/* eslint no-unused-vars: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import console from '../util/console';
import Child from './Child';

const log = console.highlightWith('red');
const componentName = 'Parent';

class Parent extends Component {
  /* Mount Start */
  constructor(props) {
    super(props);
    this.state = { test: true };
    log(componentName, 'constructor');
  }

  // componentWillMount() {
  //   log(componentName, 'componentWillMount');
  // }

  // render() {}

  componentDidMount() {
    log(componentName, 'componentDidMount');
  }
  /* Mount End */

  /* Update Start */
  componentWillReceiveProps() {
    log(componentName, 'componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    log(componentName, 'shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    log(componentName, 'componentWillUpdate');
  }

  // render () {}

  componentDidUpdate() {
    log(componentName, 'componentDidUpdate');
  }
  /* Update End */

  /* Unmount Start */
  componentWillUnmount() {
    log(componentName, 'componentWillUnmount');
  }

  // update = () => {
  //   this.setState({ test: !this.state.test })
  // }

  render() {
    log(componentName, 'render');
    return (
      <div>
        <span>{componentName}</span>
        <span>Count: {this.props.count}</span>
        {/* <Child count={this.props.count} /> */}
      </div>
    );
  }
}

Parent.propTypes = {
  count: PropTypes.number
}

export default Parent;
