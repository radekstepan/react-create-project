import React from 'react';
import _ from 'lodash';

import Page from '../mixins/Page.js';

import Link from '../components/Link.jsx';

export default React.createClass({

  displayName: 'ArticlePage.jsx',

  'mixins': [ Page ],

  render() {
    let store = this.state,
        id = this.props.id;

    let article = _.find(store.articles, a => a.id == id);

    return (
      <div>
        <div>{article.title}</div>
        <div>Lorem ipsum &hellip;</div>
        <Link route="/">Back</Link>
      </div>
    );
  }

});
