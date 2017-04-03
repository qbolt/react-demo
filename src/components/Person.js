import React from 'react'

class Person extends React.Component {

  constructor() {
    super();

    this.person = this.props
    this.props = this.props.bind(this)
  }

  render() {
    return (
      <div>
        <h2>{this.props.person.name}</h2>
        <div className="app">
          <h5>email: {this.props.person.email}</h5>
          <h5>age: {this.props.person.age}</h5>
          <h5></h5>
          <h5></h5>
          <h5></h5>
        </div>
      </div>
    )
  }
}
