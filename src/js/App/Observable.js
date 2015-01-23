var EventEmitter = require('eventemitter2').EventEmitter2;
var assign = require('object-assign');
var opa = require('object-path');
var diff = require('deep-diff').diff;
var each = require('lodash.foreach');
var forOwn = require('lodash.forown');
var isFn = require('lodash.isfunction');

// These properties cannot be overwritten.
var blacklist = {
  'set':  null,
  'get':  null,
  'push': null,
  'del':  null
};

// Export an "easier" interface.
module.exports = {

  // React style.
  createClass: function(kv) {

    var Observable = function(data) {
      // Setup event emitter.
      EventEmitter.prototype.constructor.call(this, {
        'wildcard': true,
        'delimiter': '.',
        'newListener': false,
        'maxListeners': Infinity
      });

      // Copy properties onto us.
      forOwn(kv, function(val, key) {
        if (key in blacklist) throw '`' + key + '`' + ' cannot be overwritten';
        this[key] = val;
      }.bind(this));

      // Internal data store.
      if (!this.data) this.data = {};

      // Merge constructor provided data, no event.
      assign(this.data, data || {});

      // User provided "constructor".
      if (this.initialize && isFn(this.initialize)) this.initialize.call(this);
    };

    // Extend event emitter.
    assign(Observable.prototype, EventEmitter.prototype);

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

      // A third (optional) parameter, shall we emit change events?
      if (arguments.length == 3 && arguments[2]) return;

      // Publish all the change event paths.
      each(changes, function(path) {
        this.emit(path);
      }.bind(this));
    };

    // Get some or all of our data.
    Observable.prototype.get = function(path) {
      return (path) ? opa.get(this.data, path) : this.data;
    };

    // Push into an Array (and create intermediate objs/arrays if needed).
    Observable.prototype.push = function(path, value, silent) {
      opa.push(this.data, path, value);
      if (!silent) this.emit(path);
    };

    // Delete a path/remove item from array.
    Observable.prototype.del = function(path, silent) {
      opa.del(this.data, path);
      if (!silent) this.emit(path);
    };

    return Observable;

  }

};