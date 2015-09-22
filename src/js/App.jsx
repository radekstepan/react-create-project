import React from 'react';
import { RouterMixin } from 'react-mini-router';
import _ from 'lodash';

import BlogPage from './pages/BlogPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

let routes = {
  '/':    'blog',
  '/article/:id': 'article'
};

export default React.createClass({

  displayName: 'App.jsx',

  mixins: [ RouterMixin ],

  routes: routes,

  statics: {
    // Build a link to a route.
    link(to, params, query) {
      let $url;
      let re = /:[^\/]+/g;

      // Skip empty objects.
      [ params, query ] = [_.isObject(params) ? params : {}, query ].map(o => _.pick(o, _.identity));

      // Find among the routes.
      _.find(routes, (name, url) => {
        if (name != to) return;
        let matches = url.match(re);
        
        // Do not match on the number of params.
        if (_.keys(params).length != (matches || []).length) return;
        
        // Do not match on the name of params.
        if (!_.every(matches, m => m.slice(1) in params)) return;
        
        // Fill in the params.
        $url = url.replace(re, m => params[m.slice(1)]);

        // Found it.
        return true;
      });

      if (!$url) console.log(`path ${to} ${JSON.stringify(params)} is not recognized`);

      // Append querystring.
      if (_.keys(query).length) {
        $url += "?" + _.map(query, (v, k) => `${k}=${v}`).join("&");
      }

      return $url;
    }
  },

  blog() {
    return <BlogPage />;
  },

  article(id) {
    return <ArticlePage id={id} />;
  },

  notFound(path) {
    return <NotFoundPage path={path} />;
  },

  render() {
    return this.renderCurrentRoute();
  }

});
