var assign = require('object-assign');

var Observable = require('./Observable.js');
var App = require('./App.js');

var State = Observable.createClass({

  'data': {
    // Are we busy/ready?.
    'busy': false,
    // Current request to get new state from remote persistence layer.
    'req': null
  },

  initialize: function() {
    // When one of our params change, make a request.
    this.on('params.*', this.req);

    // Register dispatcher callbacks.    
    App.dispatcher.on('ARTICLES_ADD', function(obj) {
      obj.key = this.data.articles.length + 1;
      this.push('articles', obj);
    }.bind(this));
  },

  // Example of running an XHR that can be cancelled.
  req: function() {
    // Cancel previous request?
    var req;
    if (req = this.get('req')) {
      // Cancel previous request.
      clearTimeout(req);
    }
    // Regardless, we are busy.
    this.set('busy', true);
    
    // TODO: make the actual request.

    // TODO: when fin, set us as ready.
    this.set('req', setTimeout(function() {
      this.set('busy', false);
    }.bind(this), 3e3), true);
  }

});

module.exports = new State({
  // Query parameters.
  'params': {},
  // An actual list of articles.
  'articles': []
});