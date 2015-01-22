var opa = require('object-path');

var App = require('./App.js');

opa.set(App.actions, 'tasks.add', function() {
  App.dispatcher.trigger('TASKS_ADD', obj);
});