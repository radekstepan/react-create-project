var assign = require('object-assign');

var Observable = require('../../App/Observable.js');
var App = require('../../App/App.js');

module.exports = (function() {

  // Extend event.
  assign(Model.prototype, Observable.prototype);

  function Model() {
    this.data = {
      'list': []
    };

    App.dispatcher.on('TASKS_ADD', function(task) {
      this.list.push(task);
      // Manually emit event since we are not using our own `set()`.
      this.emit('list');
    }.bind(this));
  };

  Model.prototype.method = function() {
    //
  };

  return Model;

})();