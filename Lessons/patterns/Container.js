import React, { Component } from 'react'
import Display from './Display'

class App extends Component {
  // Set Initial State
  state = {
    // key: value,
  }

  // On Load Function
  componentDidMount () {
    // Load data API etc.
  }

  // Rendering Routes
  render() {
    return (
      <div className="">
        <h2>Hello from Container Component</h2>
        <br />
        <Display />
      </div>
    )
  }
}

export default App
