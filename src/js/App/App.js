var EventEmitter = require('eventemitter2').EventEmitter2;
var assign = require('object-assign');

// This should live in its own module, providing a requireable interface that
//  all components can reach.
module.exports = {

  // Use dispatcher.on(EVENT, PAYLOAD) in models/stores to update views/components.
  'dispatcher': assign({}, EventEmitter.prototype),

  // The most "powerful" module eva'.
  'actions': {}

};