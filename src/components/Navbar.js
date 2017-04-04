import React from 'react'
import { Link } from 'react-router'

import '../app.css'

export default class Navbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <Link to='/people'><h2>People</h2></Link>
          <Link to='/babel'><h2>Babel</h2></Link>
        </ul>
      </div>
    )
  }
}
