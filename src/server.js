import qs from 'qs' 

// server-side
import { renderToString } from 'react-dom/server'
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import routes from './pages/Routes';
import indexStatic from './indexStatic';

const app = Express()
const port = process.env.PORT || 8080;

//Serve static files
app.use('/public', Express.static('static'));


// This is fired every time the server side receives a request
app.use(handleRender)

function handleRender(req, res) {
  // Render the component to a string
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    const html = renderToString(<RouterContext {...props} />);
    res.send(renderFullPage(html))
  })
}

function renderFullPage(html, preloadedState={}) {
  return indexStatic(html, preloadedState);
}

app.listen(port)