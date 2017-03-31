'use strict'

var React = require('react');
import { Route, IndexRoute } from 'react-router'

import HomePage from './HomePage';
import AboutPage from './AboutPage';

module.exports = (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage} />
    </div>
);
