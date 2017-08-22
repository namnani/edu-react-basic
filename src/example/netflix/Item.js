import React from 'react'
import ListToggle from './ListToggle'

const Item = ({ item }) => {
  const { name, score, overview, original_title: originalTitle, backdrop_path: backdropPath } = item
  const backdrop = `http://image.tmdb.org/t/p/original${backdropPath}`;
  const title = name || originalTitle

  return (
    <div className="Item" style={{ backgroundImage: `url('${backdrop}')` }} >
      <div className="overlay">
        <div className="title">{title}</div>
        <div className="rating">{score} / 10</div>
        <div className="plot">{overview}</div>
        <ListToggle />
      </div>
    </div>
  );
}

export default Item
