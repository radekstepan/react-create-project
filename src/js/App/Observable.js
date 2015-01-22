var EventEmitter = require('eventemitter2').EventEmitter2;
var assign = require('object-assign');
var opa = require('object-path');
var diff = require('deep-diff').diff;
var each = require('foreach');

module.exports = (function() {

  // Extend event.
  assign(Observable.prototype, EventEmitter.prototype);

  // Internal data store.
  Observable.prototype.data = {};

  // Constructor.
  function Observable(options) {
    // 1. Build more complex default data here.
    // 2. Listen to events from the outside world.
  }

  // Set (a) deeply nested value(s) and publish a change
  //  event for that path.
  Observable.prototype.set = function() {
    var changes = [];
    
    // Object set.
    if (arguments.length == 1) {
      each(diff(this.data, arguments[0]), function(change) {
        changes.push(change.path.join('.'));
      });
      assign(this.data, arguments[0]);
    
    // When path is provided.
    } else {
      changes.push(arguments[0]);
      opa.set(this.data, changes[0], arguments[1]);
    }

    // Publish all the change event paths.
    each(changes, function(path) {
      this.emit(path);
    }.bind(this));
  };

  // Get some or all of our data.
  Observable.prototype.get = function(path) {
    return (path) ? opa.get(this.data, path) : this.data;
  }

  return Observable;

})();