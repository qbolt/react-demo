import React from 'react'
import { Router, Link } from 'react-router-dom'

import { connect } from 'react-redux'

class SidebarComponent extends React.Component {

  constructor(props) {
    super(props)
    console.log('props')
    console.log(this.props)
    // local component state
    this.state = {
      searchTerm: '',
      currentlyDisplayed: this.props.people //set local currentlyDisplayed to be redux people state
    }

    this.updateList = this.updateList.bind(this)
  }

  updateList(event) {
    let searchTerm = event.target.value
    if (searchTerm) {
      let currentlyDisplayed = this.props.people.filter(person => person.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)

      // Set local component state
      this.setState({
        searchTerm,
        currentlyDisplayed
      })
    }
  }

  render() {
    return (
      <div className="sidebar">
        <input type="text" onChange={this.updateList}/>
        {this.state.currentlyDisplayed.map(person =>
          <PersonName key={person.name} person={person} />)}
      </div>
    )
  }
}

const PersonName = (props) => (
  <div>
    {/* <Link to={`/p/${props.person.id}`}> */}
      <h2>{props.person.name}</h2>
    {/* </Link> */}
  </div>
)

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const Sidebar = connect(mapStateToProps)(SidebarComponent)
export default Sidebar
