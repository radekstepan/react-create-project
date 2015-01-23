var EventEmitter = require('eventemitter2').EventEmitter2;

// This should live in its own module, providing a requireable interface that
//  all components can reach.
module.exports = {

  // Use dispatcher.on(EVENT, PAYLOAD) to listen to events from actions in
  //  models/collections/stores.
  'dispatcher': new EventEmitter({
    'wildcard': true,
    'delimiter': '.',
    'newListener': false,
    'maxListeners': Infinity
  }),

  // Attach ui/server actions here so we can call them from anywhere.
  'actions': {}

};