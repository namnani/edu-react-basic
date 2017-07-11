import React from 'react'
import ListToggle from './ListToggle'

const Item = ({ backdrop, title, score, overview }) => (
  <div className="Item" style={{ backgroundImage: `url('${backdrop}')`}} >
    <div className="overlay">
      <div className="title">{title}</div>
      <div className="rating">{score} / 10</div>
      <div className="plot">{overview}</div>
      <ListToggle />
    </div>
  </div>
);

export default Item
