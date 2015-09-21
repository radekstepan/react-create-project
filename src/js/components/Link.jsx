import React from 'react';
import { navigate } from 'react-mini-router';

export default React.createClass({

  displayName: 'Link.jsx',

  // Use onclick handler.
  _route(route, evt) {
    evt.preventDefault();
    navigate(route);
  },

  render() {
    let route = this.props.route;

    return (
      <a href={route} onClick={this._route.bind(this, route)}>
        {this.props.children}
      </a>
    );
  }

});
