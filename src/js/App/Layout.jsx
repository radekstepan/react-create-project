/** @jsx React.DOM */
var React = require('react');

// Dispatcher and Actions.
var App = require('./App.js');

var Tasks = require('../Tasks/index.js');

// Fake Server emitting task adding actions.
var Server = require('./Server.js');

module.exports = React.createClass({

  'displayName': 'Layout.jsx',

  render: function() {
    // The app layout.
    return (
      <div>
        <Tasks />
      </div>
    );
  }

});