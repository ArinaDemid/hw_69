import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from "redux-thunk";
import dishesReducer from "./store/reducers/dishesReducer";

import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dishes: dishesReducer,
  // order: orderReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
