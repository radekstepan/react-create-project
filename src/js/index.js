var React = require('react');

var state = require('./App/State.js');

// Attach all the actions for all the components to access.
require('./App/Actions.js');

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