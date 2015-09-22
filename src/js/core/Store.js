import opa from 'object-path';
import _ from 'lodash';
import { diff } from 'deep-diff';

import EventEmitter from './EventEmitter.js';

export default class Store extends EventEmitter {

  constructor(data) {
    super();
    // Initial payload.
    this.data = data || {};
  }

  // Set a value on a key. Pass truthy value as 3rd param to not emit events.
  set() {
    var changes = [];
    
    // Object assign.
    if (arguments.length == 1) {
      diff(this.data, arguments[0]).forEach(change => {
        changes.push(change.path.join('.'));
      });
      Object.assign(this.data, arguments[0]);
    // When path is provided.
    } else {
      changes.push(arguments[0]);
      opa.set(this.data, changes[0], arguments[1]);
    }

    // Shall we emit change events?
    if (arguments.length == 3 && arguments[2]) return;

    // Emit all changes.
    changes.forEach(ch => this.emit(_.isArray(ch) ? ch.join('.') : ch, this.get(ch)));
  }

  // Get this key path or everything.
  get(path) {
    return path ? opa.get(this.data, path) : this.data;
  }

}
