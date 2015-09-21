import React from 'react';

import Page from '../mixins/Page.js';

export default React.createClass({

  displayName: 'BlogPage.jsx',

  'mixins': [ Page ],

  render() {
    let store = this.state;

    let articles = store.articles.map(a => <div key={a.id}>{a.title}</div>);

    return <div>{articles}</div>;
  }

});
