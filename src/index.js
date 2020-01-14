import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from "../src/store/reducer";
import thunkMiddleware from "redux-thunk";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
