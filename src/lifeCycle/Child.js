import React, { Component } from 'react';
import PropTypes from 'prop-types'
import console from '../util/console';
// import GrandChild from './GrandChild'

const log = console.highlightWith('blue');
const componentName = 'Child';

class Child extends Component {
  /* Mount Start */
  constructor() {
    super();
    log(componentName, 'constructor');
  }

  componentWillMount() {
    log(componentName, 'componentWillMount');
  }

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

  render() {
    log(componentName, 'render');
    return (
      <div>
        <span>{componentName}</span>
        <span>Count: {this.props.count}</span>
      </div>
    );
  }
}

Child.propTypes = {
  count: PropTypes.number
}

export default Child;
