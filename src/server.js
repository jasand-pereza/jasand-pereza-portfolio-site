// libs
import Express from 'express';
import React from 'react';
import { match, RouterContext } from 'react-router';

// routes
import routes from './pages/Routes';

// server-side
import { renderToString } from 'react-dom/server';
import indexStatic from './indexStatic';
import compression from 'compression';
import { getRandomSaying } from './data/DataMethods';


// ---  begin server-side and routes code ---

const app = Express()
const port = process.env.PORT || 8080; // let Heroku assign a port if available

//Serve static files
app.use('/assets', Express.static('public/assets'));


// use gzip compression for files
app.use(compression());

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Render the component to a string

    match({ routes: routes, location: req.url }, (err, redirect, props) => {
      const html = renderToString(<RouterContext {...props} />);

      let headerSaying = getRandomSaying();
      let footerSaying = getRandomSaying();
      res.send(renderFullPage(html, { sayings: { headerSaying: headerSaying, footerSaying: footerSaying } } ));
    })
}

function renderFullPage(html, preloadedState={}) {
  return indexStatic(html, preloadedState, process.env.NODE_ENV);
}

app.listen(port)