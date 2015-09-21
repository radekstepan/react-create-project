import React from 'react';
import { RouterMixin } from 'react-mini-router';

import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';

export default React.createClass({

  displayName: 'App.jsx',

  'mixins': [ RouterMixin ],

  'routes': {
    '/':    'blog',
    '/:id': 'article'
  },

  blog() {
    return <BlogPage />;
  },

  article(id) {
    return <ArticlePage id={id} />;
  },

  render() {
    return this.renderCurrentRoute();
  }

});
