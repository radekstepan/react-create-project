/** @jsx React.DOM */
var React = require('react');

var Blog = require('../Blog/index.js');

module.exports = React.createClass({

  'displayName': 'Layout.jsx',

  render: function() {
    // The app layout.
    return (
      <div>
        <Blog />
      </div>
    );
  }

});