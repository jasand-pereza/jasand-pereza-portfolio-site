'use strict'

var React = require('react');
import { Route, IndexRoute } from 'react-router'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import WorkPageSingle from './WorkPageSingle';
import NotFound404Page from './NotFound404Page';

// all routes 
module.exports = (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/work" component={WorkPage}/>
        <Route path="/work/:workId" component={WorkPageSingle}/>
        <Route path="*" component={NotFound404Page}/>
    </div>
);
