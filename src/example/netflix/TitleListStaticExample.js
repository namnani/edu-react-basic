import React, { PureComponent } from 'react'
import Item from './Item'
import data from './data'

class TitleList extends PureComponent {
  render() {
    if (!data) return null

    return (
      <div className="TitleList" data-loaded>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {/* TODO render data with Item */}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleList
