import React, { Component } from 'react'
import { apiKey } from './App'
import Item from './Item'

class TitleList extends Component {
  constructor() {
    super()
    this.state = { data: [], mounted: false }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({
        mounted: true,
        url: nextProps.url
      }, () => { this.loadContent() })
    }
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.loadContent()
      this.setState({ mounted: true })
    }
  }

  loadContent() {
    const requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${apiKey}`

    window.fetch(requestUrl)
      .then((response) => response.json()
      ).then((data) => {
        this.setState({ data })
      }).catch(() => {
        console.log('There has been an error')
      })
  }

  // async loadContent() {
  //   const requestUrl = `https://api.themoviedb.org/3/${this.props.url}&api_key=${apiKey}`

  //   const response = await window.fetch(requestUrl)
  //   const data = await response.json()
  //   this.setState({ data })
  // }

  render() {
    let titles = '';
    const { data } = this.state

    if (data.results) {
      titles = data.results.map((title, i) => {
        if (i < 5) {
          const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
          const name = title.name || title.original_title

          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          )
        }

        return <div key={title.id} />
      })
    }

    return (
      <div className="TitleList" data-loaded={this.state.mounted}>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleList
