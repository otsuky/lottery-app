import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import logger from 'redux-logger'

let todos = [];

const store = createStore(rootReducer, {
    todos: todos,
  }, applyMiddleware (logger)
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
  // console.log(store.getState());
});
