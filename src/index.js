import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import people from './reducers/people'

import Sidebar from './containers/Sidebar'
import Babel from './containers/Babel'
import Person from './components/Person'
import App from './components/App'


fetch('https://api.myjson.com/bins/qiver')
  .then(response => response.json())
  .then(result => startApp(result))

const startApp = (result) => {
  const initialState = {
    people: result
  }

  const store = createStore(people, initialState)
  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={App}/>
          <Route path="/people" component={Sidebar}>
            <Route path="/people/:personId" component={Person} />
          </Route>
          <Route path="/babel" component={Babel}></Route>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
