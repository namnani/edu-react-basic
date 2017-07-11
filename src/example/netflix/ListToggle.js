import React, { Component } from 'react'

class ListToggle extends Component {
  constructor() {
    super()
    this.state = { toggled: false }
  }

  handleClick = () => {
    this.setState(({ toggled }) => ({ toggled: !toggled }))
  }

  render() {
    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus" />
          <i className="fa fa-fw fa-check" />
        </div>
      </div>
    );
  }
}

export default ListToggle
