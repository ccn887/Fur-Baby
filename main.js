import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './client/store';
import './index.css'
import Routes from './Routes'

//https://css-tricks.com/intro-firebase-react/
ReactDOM.render(
  <Provider store={store}>
  <Router>
  <Routes />
</Router>
</Provider>,
  document.getElementById('app')
);
