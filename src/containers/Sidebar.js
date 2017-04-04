import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import '../app.css'

class SidebarComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  filter(event) {
    this.setState({ filter: event.target.value })
  }

  render() {
    let people = this.props.people
    if (this.state.filter) {
      people = people.filter(person =>
        person.name.toLowerCase()
          .indexOf(this.state.filter.toLowerCase()) >= 0)
    }
    return (
      <div className="people">
        <div className="sidebar">
          <input type="text" onChange={this.filter.bind(this)}/>
          {people.map(person =>
            <PersonName key={person.name} person={person} />)}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const PersonName = (props) => (
  <div>
    <Link to={`/people/${props.person.id}`}>
      <h2>{props.person.name}</h2>
    </Link>
  </div>
)

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const Sidebar = connect(mapStateToProps)(SidebarComponent)
export default Sidebar
