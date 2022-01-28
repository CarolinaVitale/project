import './App.css'

import { Component } from 'react'

import Navigation from './layout/Navigation/Navigation'

class App extends Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {

    return (
      <>
        <Navigation />
      </>
    )
  }
}


export default App
