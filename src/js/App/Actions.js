var opa = require('object-path');

var App = require('./App.js');

opa.set(App.actions, 'articles.add', function(obj) {
  App.dispatcher.emit('ARTICLES_ADD', obj);
});

// For funzies, let's add an articles after a timeout.
setTimeout(function() {
  App.actions.articles.add({
    'title': 'Learn data science in your browser',
    'url': 'dataquest.io'
  });
}, 2e3);