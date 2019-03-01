import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer)
const initialState = {
  message: "you have accessed state"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST":
      console.log("TEST action triggered");
      return {message: state.message + "."}
      break;
    default:
      return state;
      break;
  }
}

ReactDOM.render (
  <Provider store={store}>
    <App />,
    document.getElementById('root')
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
