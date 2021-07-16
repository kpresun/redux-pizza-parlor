import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {logger} from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

//Reducers
const pizzaReducer = (state = [], action) => {
    if (action.type === 'GET_PIZZAS') {
        return action.payload
    }
    return state;
};

const customerReducer = (state = [], action) => {
  return state;
};

const checkOutReducer = (state = [], action) => {
  return state;
};

// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    customerReducer,
    checkOutReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
