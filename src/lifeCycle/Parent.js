import React, { Component } from 'react';
import console from '../util/console';
import Child from './Child';

const log = console.highlightWith('red');
const componentName = 'Parent';

class Parent extends Component {
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
            <span>count: {this.props.count}</span>
            <Child count={this.props.count} />
            </div>
        );
    }
}

export default Parent;
