import _ from 'lodash';

import Store from '../core/Store.js';

import actions from '../actions/appActions.js';

class AppStore extends Store {

  // Initial payload.
  constructor() {
    super({
      articles: [
        {
          id: 1,
          title: 'Winklevoss Twins Aim to Take Bitcoin Mainstream with a Regulated Exchange',
          url: 'nytimes.com'
        }, {
          id: 2,
          title: 'Gotham Air: Manhattan to JFK in 6 minutes for $99',
          url: 'gothamair.com'
        }, {
          id: 3,
          title: 'Gitlet: Git implemented in JavaScript',
          url: 'maryrosecook.com'
        }
      ]
    });

    // Listen to all app actions
    // articles.comment -> onArticlesComment
    actions.onAny((obj, event) => {
      let fn = ('on.' + event).replace(/[.]+(\w|$)/g, (m, p) => {
        return p.toUpperCase();
      });

      (fn in this) && this[fn](obj);
    });
  }
  
  // Add article comment action listener.
  onArticlesComment(obj) {
    let index;
    // Find the article.
    let article = _.find(this.data.articles, (a, i) => {
      if (a.id == obj.id) {
        index = i;
        return true;
      }
    });

    // Init new or add to array.
    if ('comments' in article) {
      article.comments.push(obj.value);
    } else {
      article.comments = [ obj.value ];
    }

    // Save the new comment, will emit event.
    this.set([ 'articles', index ], article);
  }

}

export default new AppStore();
