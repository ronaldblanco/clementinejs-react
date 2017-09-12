var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./Routes');
var App = require('./App');

var ajax = require('./ajax-functions');
var appUrl = window.location.origin;
var apiUrl = appUrl + '/api/:id';

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);