/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

  'displayName': 'Article.jsx',

  // Pure function, it does not modify component state, it returns the same result each
  //  time it's invoked, and it does not read from or write to the DOM or otherwise
  //  interact with the browser (e.g., by using setTimeout).
  render: function() {
    return (
      <li className="article">
        <a href={this.props.url}>{this.props.title}</a>
      </li>
    );
  }

});