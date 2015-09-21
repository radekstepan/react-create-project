import React from 'react';

import Article from './Article.jsx';

export default React.createClass({

  displayName: 'Articles.jsx',

  render() {
    let store = this.props.store;

    let articles = store.articles.map(a => <Article {...a} />);

    return <div>{articles}</div>;
  }

});
