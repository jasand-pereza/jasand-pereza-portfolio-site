'use strict'

var React = require('react');
import { Route, IndexRoute } from 'react-router'

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import WorkPageSingleContainer from './../containers/WorkPageSingleContainer';
import NotFound404Page from './NotFound404Page';
import App from './../components/App';

// all routes 
module.exports = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="about" component={AboutPage}/>
            <Route path="work" component={WorkPage}/>
            <Route path="work/:workSlug" component={WorkPageSingleContainer}/>
            <Route path="*" component={NotFound404Page}/>
        </Route>
    </div>
);
