'use strict'

var React = require('react');
import { Route, IndexRoute } from 'react-router'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFound404Page from './NotFound404Page';

// all routes 
module.exports = (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
        <Route path="*" component={NotFound404Page}/>
    </div>
);
