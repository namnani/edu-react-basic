import React, { PureComponent } from 'react'
import { apiKey } from './App'
import Item from './Item'

class TitleList extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.loadContent(nextProps.url)
    }
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.loadContent(this.props.url)
    }
  }

  // loadContent(url) {
  //   const requestUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`

  //   window.fetch(requestUrl)
  //     .then((response) => response.json()
  //     ).then((data) => {
  //       this.setState({ titles: data.results })
  //     }).catch(() => {
  //       console.log('There has been an error')
  //     })
  // }

  async loadContent(url) {
    const requestUrl = `https://api.themoviedb.org/3/${url}&api_key=${apiKey}`

    const response = await window.fetch(requestUrl)
    const data = await response.json()
    this.setState({ titles: data.results })
  }

  render() {
    const { titles } = this.state

    if (!titles || titles.length === 0) return null

    return (
      <div className="TitleList" data-loaded>
        <div className="Title">
          <h1>{this.props.title}</h1>
          <div className="titles-wrapper">
            {titles.slice(0, 3).map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TitleList
