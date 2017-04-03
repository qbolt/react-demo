import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import people from './reducers/people'
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
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
