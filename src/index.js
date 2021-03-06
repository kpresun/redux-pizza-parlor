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
        console.log(`the current action.payload is ${action.payload}`);
        return state = action.payload;
    }
    return state;
};


const customerReducer = (state = [], action) => {
    if (action.type === "ADD_NEW_CUSTOMER") {
    return action.payload;
    }
    return state;
};



const cartReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload]
    case "REMOVE_FROM_CART":
      return [...state.filter(pizza => (pizza.orderID !== (action.payload.orderID - 1)))]
    default:
      return state;

  }
}
//return [...state.filter(pizza => pizza.name != (action.payload.pizza.name)))]


// return [...state.filter((pizza, index) => )]
// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
  combineReducers({
    pizzaReducer,
    cartReducer,
    customerReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);