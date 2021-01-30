import React, { Component } from 'react'
import Navigation from 'react-key-navigation'
import HomePage from './pages/Home.jsx'

class App extends Component {
  render() {
    return(
      <Navigation>
        <HomePage />
      </Navigation>
    )
  }
}

export default App