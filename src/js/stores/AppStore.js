import Store from '../core/Store.js';

class AppStore extends Store {

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
  }
  
  onAction() {

  }

}

export default new AppStore();
