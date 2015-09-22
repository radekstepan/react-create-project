import React from 'react';
import { navigate } from 'react-mini-router';

import App from '../App.jsx';

export default React.createClass({

  displayName: 'Link.jsx',

  _route(link, evt) {
    evt.preventDefault();
    navigate(link);
  },

  render() {
    let route = this.props.route;
    let link = App.link(route.to, route.params, route.query);

    return (
      <a href={link} onClick={this._route.bind(this, link)}>
        {this.props.children}
      </a>
    );
  }

});
