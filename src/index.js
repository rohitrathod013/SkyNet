import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {UserProvider} from './context/UserContext';

import {ProductProvider} from './context/context'


ReactDOM.render(
  // <React.StrictMode>
  <ProductProvider>
    <Router>
    <UserProvider>
      <App />
      </UserProvider>
    </Router>
    
  </ProductProvider>
  ,
 
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
