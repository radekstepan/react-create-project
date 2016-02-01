import falcorRouter from 'falcor-router';

let FalcorRouter = falcorRouter.createClass([
  {
    route: 'articlesById[{integers:ids}]["title","url"]',
    get: function(pathSet) {
      return {
        jsonGraph: {
          articlesById: {
            '0': {
              title: 'Winklevoss Twins Aim to Take Bitcoin Mainstream with a Regulated Exchange',
              url: 'nytimes.com'
            },
            '1': {
              title: 'Gotham Air: Manhattan to JFK in 6 minutes for $99',
              url: 'gothamair.com'
            },
            '2': {
              title: 'Gitlet: Git implemented in JavaScript',
              url: 'maryrosecook.com'
            }
          }
        }
      };
      return { path: [ "greeting" ], value: "Hello World" }
    },
    set: function(jsonGraphArg) {
      
    }
  }, {
    route: 'genrelist[{integers:indices}].titles.push',
    call: function(callPath, args) {

    }
  }
]);

export default class Router extends FalcorRouter {

  constructor(req) {
    super();
    this.req = req;
  }

}
