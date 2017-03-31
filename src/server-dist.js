'use strict';

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _server = require('react-dom/server');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _Routes = require('./pages/Routes');

var _Routes2 = _interopRequireDefault(_Routes);

var _indexStatic = require('./indexStatic');

var _indexStatic2 = _interopRequireDefault(_indexStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// server-side

var port = 3000;

//Serve static files
app.use('/public', _express2.default.static('static'));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // Render the component to a string
  (0, _reactRouter.match)({ routes: _Routes2.default, location: req.url }, function (err, redirect, props) {
    var html = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
    res.send(renderFullPage(html));
  });
}

function renderFullPage(html) {
  var preloadedState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _indexStatic2.default)(html, preloadedState);
}

app.listen(port);
