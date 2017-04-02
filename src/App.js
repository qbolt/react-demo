import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()

    // initial state
    this.state = { items: [] }

    // bindings
    this.filter = this.filter.bind(this)
  }

  componentWillMount() {
    console.log('fetching')
    fetch('https://api.myjson.com/bins/qiver')

      .then(response => response.json())
      .then(data => this.setState({ items: [...data] }))

    console.log('state set')
  }

  filter(event) {
    this.setState({ filter: event.target.value })
  }

  render() {
    let items = this.state.items
    if (this.state.filter) {
      items = items.filter( item =>
        item.name.toLowerCase()
          .indexOf(this.state.filter.toLowerCase()) >= 0)
    }
    return (
      <div>
        <input type="text" onChange={this.filter}/>
        {items.map(item =>
          <Person key={item.name} person={item} />)}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App
