import React from 'react'

import Navbar from './Navbar'

import '../index.css'

export default class App extends React.Component {
  render() {
    return (
      <div className="root">
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
