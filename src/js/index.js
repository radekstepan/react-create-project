var React = require('react');

var actions = require('./App/Actions.js');
var state = require('./App/State.js');

// Initial state.
state.set('articles', [
  {
    'key': 1,
    'title': 'Winklevoss Twins Aim to Take Bitcoin Mainstream with a Regulated Exchange',
    'url': 'nytimes.com'
  }, {
    'key': 2,
    'title': 'Gotham Air: Manhattan to JFK in 6 minutes for $99',
    'url': 'gothamair.com'
  }, {
    'key': 3,
    'title': 'Gitlet: Git implemented in JavaScript',
    'url': 'maryrosecook.com'
  }
], true);

var Layout = React.createFactory(require("./App/Layout.jsx"));

React.render(Layout({}), document.body);