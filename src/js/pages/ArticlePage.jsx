import React from 'react';

import Page from '../mixins/Page.js';

export default React.createClass({

  displayName: 'ArticlePage.jsx',

  'mixins': [ Page ],

  render() {
    let store = this.store,
        id = this.props.id;

    let article = store.articles.findIndex(a => a.id == id);

    return (
      <div>
        <div>{article.title}</div>
        <div>Lorem ipsum &hellip;</div>
      </div>
    );
  }

});
