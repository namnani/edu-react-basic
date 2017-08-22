import React from 'react'
import Logo from './Logo'
import './App.css'
import UserProfile from './UserProfile'
import Hero from './Hero'
import TitleList from './TitleList'
// import TitleList from './TitleListExample'
// import TitleList from './TitleListStaticExample'

export const apiKey = '87dfa1c669eea853da609d4968d294be'

class App extends React.Component {
  constructor() {
    super()

    this.user = {
      name: 'Young-je',
      img: 'http://d2.naver.com/image/20170404/486366833803.png',
    }

    this.state = {
      searchTerm: '',
      searchUrl: '',
    }
  }

  handleKeyUp = (e) => {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      const searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${apiKey}`
      this.setState({ searchUrl })
    }
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <div id="search" className="Search">
            <input
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange}
              type="search"
              placeholder="Search for a title..."
              value={this.state.searchTerm}
            />
          </div>
          <UserProfile user={this.user} />
        </header>
        <Hero />
        <TitleList title="Search Results" url={this.state.searchUrl} />
        <TitleList title={`Top TV picks for ${this.user.name}`} url='discover/tv?sort_by=popularity.desc&page=1' />
        <TitleList title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1' />
        <TitleList title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1' />
        <TitleList title="Comedy magic" url='genre/35/movies?sort_by=popularity.desc&page=1' />
      </div>
    );
  }
}

export default App;
