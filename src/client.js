import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

//import { createStore } from 'redux';
//import { Provider } from 'react-redux';

// custom defined routes
import routes from './pages/Routes';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


// Grab the state from a global variable injected into the server-generated HTML
//const preloadedState = window.__PRELOADED_STATE__;  --- use when store is implemented

// Allow the passed state to be garbage-collected
//delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
//const store = createStore(counterApp, preloadedState);

ReactDOM.render(
  ///<Provider store={{}}> -- use when implemented store
    <Router history={browserHistory}>
        {routes}
    </Router>
 // </Provider>
 ,
  document.getElementById('app')
)
