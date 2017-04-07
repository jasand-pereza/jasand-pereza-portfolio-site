
// libs
import Express from 'express'
import React from 'react'
import { match, RouterContext } from 'react-router'

// routes
import routes from './pages/Routes';

// server-side
import { renderToString } from 'react-dom/server'
import indexStatic from './indexStatic';


// ---  begin server-side and routes code ---

const app = Express()
const port = process.env.PORT || 8080; // let Heroku assign a port if available

//Serve static files
app.use('/public', Express.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Render the component to a string
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const html = renderToString(<RouterContext {...props} />);
    res.send(renderFullPage(html));
  })
}

function renderFullPage(html, preloadedState={}) {
  return indexStatic(html, preloadedState);
}

app.listen(port)